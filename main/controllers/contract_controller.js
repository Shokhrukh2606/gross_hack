const { ipcMain } = require('electron')
const Contract = require('../models/contract.js');

const contract_controller=()=>{
	const create=async (event, payload, win)=>{
		let contract = await Contract.create(JSON.parse(payload));
		win.webContents.send('contract_saved', contract.id);
	}
	
	return {
		create:create
	}
}
module.exports=contract_controller();