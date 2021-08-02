const electron = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain } = require('electron').ipcMain;

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(null);

let mainWindow;

app.on('ready', function(){
    var screenElectron = electron.screen;
    var mainScreen = screenElectron.getPrimaryDisplay();
    var dimensions = mainScreen.size;
    mainWindow = new BrowserWindow({ width: dimensions.width, height: dimensions.height, resizable: true, frame: false, icon: "Static/Logo.ico", webPreferences: {nodeIntegration: true}});
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});

ipcMain.on('minimize', () => {
    mainWindow.minimize();
    //win.hide();
  });