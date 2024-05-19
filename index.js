const { BrowserWindow, app } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow({
    fullscreen: true,
    nodeIntegration: true,
    webSecurity: false,
    allowRunningInsecureContent: true,
    contextIsolation: false,
    kiosk: true,
    minimizable: false,
    resizable: false,
    closable: false,
    movable: false,
    skipTaskbar: true,
    frame: false,
    autoHideMenuBar: true,
    focusable: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
     }
  });
  win.loadFile("desktop/index.html");
});
