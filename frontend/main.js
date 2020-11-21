const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        altura: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});
