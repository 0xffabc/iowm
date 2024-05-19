const { BrowserWindow, app } = require("electron");
require("@electron/remote/main").initialize();

app.on("ready", () => {
  const win = new BrowserWindow({
    width: 1920 * 0.8,
    height: 1080 * 0.8,
    nodeIntegration: true,
    webSecurity: false,
    contextIsolation: false,
    minimizable: false,
    resizable: false,
    movable: false,
    focusable: false,
    closable: false,
    frame: false,
    webPreferences: {
       nodeIntegration: true,
        contextIsolation: false,
     }
  });
  require("@electron/remote/main").enable(win.webContents);
  win.loadFile("../desktop/index.html");
});