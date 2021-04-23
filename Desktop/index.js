const {app, BrowserWindow} = require('electron');

let appWindow;

function crearVentana() {
    appWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        // resizable: false,
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false,
        icon: 'icon.png'
    });

    //Cuando la app es cerrada
    appWindow.on('closed', () => {
        appWindow = null;
    });

    //cargar HTML
    appWindow.loadFile('./index.html');

    //Cuando la app este lista, mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    });
};


app.on('ready', crearVentana);