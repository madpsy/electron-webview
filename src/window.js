const path = require('path');
const { BrowserWindow } = require('electron'); // https://www.electronjs.org/docs/api/browser-window

exports.createBrowserWindow = app => {
  // https://www.electronjs.org/docs/api/browser-window#class-browserwindow
  return new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    //titleBarStyle: 'hidden',
    //frame: false,
    backgroundColor: '#ffffff',
    webPreferences: {
      devTools: false, // true if you want to make the dev tools accessible to the user.
      contextIsolation: true,
      enableRemoteModule: true, // required for print function [removed since Electron 12, uses https://github.com/electron/remote]
      webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
      preload: path.join(__dirname, '../preload.js'), // required for print function,
      title: 'New App'
    }
  });
};
