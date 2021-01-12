const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const Beneficiar = require('../models/beneficiar.js');


const beneficiar_controller = () => {

    const create = async (arg, win) => {
        console.log(win);
        try {
            const beneficiar = await Beneficiar.create(arg);
            
            win.webContents.send('beneficiar_saved',beneficiar);
        }
        catch (e) {
            console.log(e)
        }

    }
    const list = async (event, win) => {
        const beneficiars= await Beneficiar.findAll();
        win.webContents.send('beneficiar_list_resp',beneficiars);
    }
    return {
        beneficiar_create: create,
        beneficiar_list: list
    }

}
module.exports = beneficiar_controller();