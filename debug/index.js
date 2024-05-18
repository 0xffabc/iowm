const { BrowserWindow, app } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow({
    fullscreen: true,
    nodeIntegration: true,
    webSecurity: false,
    contextIsolation: false,
    minimizable: false,
    resizable: false,
    movable: false,
    focusable: true,
    closable: false,
    frame: false,
    webPreferences: {
       nodeIntegration: true,
        contextIsolation: false,
     }
  });
  win.loadFile("../desktop/index.html");
});