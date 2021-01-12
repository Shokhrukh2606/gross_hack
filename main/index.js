const {app, BrowserWindow, ipcMain,Notification } = require('electron');
const { beneficiar_create, beneficiar_list} = require('./controllers/beneficiar_controller.js');
const { insurant_create, insurant_list} = require('./controllers/insurant_controller.js');
const {transport_create}=require("./controllers/transport_controller.js");
const {load_objects} = require("./controllers/premiya_controller.js");
const {login,set_local_password,local_password_init, check_local_pass} = require('./controllers/user_controller.js');
const {create}=require("./controllers/contract_controller.js");
const dns=require('dns');
var internet=false;

var mainWindow;
async function createWindow() {
  const win = await new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.maximize();
  // win.removeMenu()

  win.loadURL('http://localhost:3000')

  mainWindow=win;
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//listener abdumalik

ipcMain.on('login', (event, arg) => {
  login(arg, mainWindow);
});

ipcMain.on('set_local_password', (event, user_id, local_password) => {
  set_local_password(user_id, local_password,mainWindow );
});

ipcMain.on('local_password_init', (event) => {
  local_password_init(event, mainWindow);
});

ipcMain.on('check_local_pass', (event, credentials) => {
  check_local_pass(event, credentials, mainWindow);
});

ipcMain.on('contract_create', (event, payload) => {
  create(event, payload, mainWindow);
});

ipcMain.on('beneficiar_list', (event) => {
  beneficiar_list(event, mainWindow);
});

ipcMain.on('insurant_list', (event) => {
  insurant_list(event, mainWindow);
});

ipcMain.on('transport_create', (event, args, contract_id) => {
  transport_create(event, args, contract_id);
});


ipcMain.on('load_objects', (event, contract_id) => {
  load_objects(event, contract_id);
});



// Shoh functions
ipcMain.on('beneficiar_create', (event,came) => {
  beneficiar_create(came, mainWindow)
});
ipcMain.on('insurant_create', (event, came) => {
  insurant_create(came, mainWindow)
});
// Shoh functions


// check internet

setInterval(check_internet, 3000);

function check_internet(){
  dns.resolve('www.google.com', function(err) {
    if (err) {
     if(internet){
      const notification = {
         title: 'GROSS: Интернет отключен',
      }
      new Notification(notification).show();
      internet=false;
    }
  } else {
    if(!internet){
      const notification = {
        title: 'GROSS: Интернет',
        body: 'У вас есть интернет, я начинаю синхронизацию'
      }
      new Notification(notification).show()
      internet=true;
    }
  }
});
}