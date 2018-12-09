const { electron, app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const fs = require('fs');


const LOAD_LOCAL_FILE = 'load-local-file';

const LOCAL_FILE_TEXT = 'local-file-text';


let mainWindow;


function createWindow() {
    mainWindow = new BrowserWindow({width: 1600, height: 900, show: false});

    let indexPath

    if (isDev && process.argv.indexOf('--noDevServer') === -1) {
      indexPath = url.format({
        protocol: 'http:',
        host: 'localhost:8080',
        pathname: 'index.html',
        slashes: true
      })
    } else {
      indexPath = url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, 'dist', 'index.html'),
        slashes: true
      })
    }
    mainWindow.loadURL(indexPath);
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
        if (isDev) {
            mainWindow.webContents.openDevTools()
        }
    });
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});