const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const Client = require('../models/client.js');


const client_controller = () => {

    const create = async (arg, win) => {
        console.log(win);
        try {
            const client = await Client.create(arg);
            
            win.webContents.send('client_saved',client);
        }
        catch (e) {
            console.log(e)
        }

    }
    const list = async (event, win) => {
        const clients= await Client.findAll({
            limit: 2,
            offset: 1
        });
        win.webContents.send('client_list_resp',clients);
    }
    return {
        client_create: create,
        client_list: list
    }

}
module.exports = client_controller();