"use strict";
const { BrowserWindow, app } = require("electron");
app.on("window-all-closed", () => {
    app.quit();
});
app.on("ready", () => {
    let win = new BrowserWindow({
        fullscreen: true,
        webSecurity: false,
        allowRunningInsecureContent: true,
        // kiosk: true,
        // frame: false,
        autoHideMenuBar: true,
        // focusable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    win.on("closed", () => {
        win = null;
    });
    win.loadFile("./src/index.html");
});
