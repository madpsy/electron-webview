import electron, { webContents, BrowserView } from 'electron';

exports.createBrowserView = mainWindow => {
  const view = new BrowserView();
  mainWindow.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 1024, height: 768 });
  view.webContents.loadURL('https://www.github.com');
};
