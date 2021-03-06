const platform = require('os').platform()

// const electron = require('electron')
// // Module to control application life.
// const app = electron.app
// // Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow

const {app, Menu, Tray, BrowserWindow} = require('electron')
const path                             = require('path')
const url                              = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let tray = null

function ready () {
  setupTray()
  createWindow()
}
function setupTray () {
  let trayImage

  // Determine appropriate icon for platform
  if (platform === 'darwin') {
    trayImage = path.join(__dirname, 'phone-call.png')
  }  else if (platform === 'win32') {
    trayImage = path.join(__dirname, 'phone-call.ico')
  }

  // const tray = new Tray('${__dirname}/phone-call.ico')
  tray = new Tray(trayImage)
  if (platform === 'darwin') {
    tray.setPressedImage(path.join(__dirname, 'phone-call-highlight.png'))
  }
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'},
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
}
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, icon: `${__dirname}/phone-call.ico`})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes : true,
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', ready)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
