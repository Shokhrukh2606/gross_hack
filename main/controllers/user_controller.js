const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const User = require('../models/user.js');
const axios=require('axios');
const md5=require('md5');

const users_controller=()=>{

	const login= async (arg, win)=>{
		axios.post('http://edupark.uz/auth.php', {
			username: arg.login,
			password: arg.password
		})
		.then(function (response) {
			let data=response.data;
			if(data.auth==true){
				(async () =>{
					let user = await User.findOne({where:{SYSTEM_ID:data.id}});
					if(user==null){
						await User.create({
							NAME:data.name,
							SYSTEM_ID:data.id
						});
					}
					win.webContents.send('successfull_login',data.id, data.name);
				})();
			}else{
				win.webContents.send('wrong_credentials');
			}
		})
		.catch(function (error) {
			win.webContents.send('no_internet');
		});
	}
	const set_local_password= async (user_id, local_password, win)=>{
		var user=await User.findOne({where:{system_id:user_id}});
		user.LOCAL_PASSWORD_HASH=md5(local_password);
		await user.save();
		win.webContents.send('local_password_saved');
	}
	const local_password_init = async (event, win)=>{
		let users=await User.findAll();
		win.webContents.send('users_loaded', users);
	}
	const check_local_pass = async (event, credentials, win)=>{
		const user=await User.findOne({where:{
				id:credentials.id,
				LOCAL_PASSWORD_HASH:md5(credentials.password)
			}
		});

		if(user){
			win.webContents.send('check_local_pass', true, user.NAME);
			return user.id;
		}else{
			win.webContents.send('check_local_pass', false);
		}
	}
	return {
		login:login,
		set_local_password:set_local_password,
		local_password_init:local_password_init,
		check_local_pass:check_local_pass
	}
}
module.exports=users_controller();