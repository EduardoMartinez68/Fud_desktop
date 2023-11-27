const { app, BrowserWindow , Menu} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1248,
    height: 731,
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'FUD.png'  // Ruta al archivo de icono
  });
  mainWindow.loadURL('https://992mpm64-4000.usw3.devtunnels.ms/');
  //mainWindow.loadFile('index.html'); // Reemplaza 'index.html' con el nombre de tu archivo HTML principal.

  //
  Menu.setApplicationMenu(null);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});