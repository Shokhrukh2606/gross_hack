const { ipcMain } = require('electron')
const Transport = require('../models/transport.js');

const transport_controller = () => {

	  const create = async (event, args, id)=>{
	  	try{
	  		args.CONTRACT_ID=id;
	  		console.log(args);
	  		let transport=await Transport.create(args);
	  		event.reply("transport_create_resp", transport);
	  	}catch(e){
	  		console.log(e);
	  	}
	  }

    return {
       transport_create:create
    }

}
module.exports = transport_controller();