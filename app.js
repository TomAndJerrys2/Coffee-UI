// Main Electron Application Manager

// Definitions and libraries
const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
let WIN_WIDTH = new Number(800);
let WIN_HEIGHT = new Number(800);

let mainWindow = null;

// Create New Window
createWindow = () => {
    mainWindow = new BrowserWindow({
        width: WIN_WIDTH,
        height: WIN_HEIGHT,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/CoffeeFrontEnd/browser/index.html`),
            protocol: "file:",
            slashes: true,
        })
    );

    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}

// Application Events
app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") 
        app.quit();
});

app.on("activate", function () {
    if (mainWindow === null) 
        createWindow();
});