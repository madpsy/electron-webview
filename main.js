// Utilities
const path = require('path');
const fs = require('fs');

// Electron
const { app, Menu } = require('electron');
require('@electron/remote/main').initialize();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on('ready', () => {
  // Main window
  const window = require('./src/window');
  mainWindow = window.createBrowserWindow(app);

  // Option 1: Uses Webtag and load a custom html file with external content
  // mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Option 2: Load directly an URL if you don't need interface customization
  mainWindow.loadURL('https://portfolio-genzyy.vercel.app/');

  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  //mainWindow.openDevTools();

  // Menu (for standard keyboard shortcuts)
  // This is a custom menu created with a template.
  // For now this has been disabled by sending null
  // to the setApplication menu function.
  // Uncomment the below lines and comment out
  // where we have passed null as said above.
  // const menu = require('./src/menu');
  // const template = menu.createTemplate(app.name);
  // const builtMenu = Menu.buildFromTemplate(template);
  // Menu.setApplicationMenu(builtMenu);

  Menu.setApplicationMenu(null);
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit();
});
