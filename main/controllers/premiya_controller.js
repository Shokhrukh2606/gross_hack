const { ipcMain } = require('electron')
const Premiya = require('../models/premiya.js');
const Transport = require('../models/transport.js');

const premiya_controller = () => {

	  const load = async (event,id)=>{
	  	try{
	  		let transports=await Transport.findAll({
	  			where:{
	  				CONTRACT_ID:id
	  			}
	  		});
	  		event.reply("load_objects_resp", transports);
	  	}catch(e){
	  		console.log(e);
	  	}
	  }

    return {
       load_objects:load
    }

}
module.exports = premiya_controller();