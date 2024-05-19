const { BrowserWindow, app } = require("electron");

app.on("window-all-closed", () => {
  app.quit();
});

app.on("ready", () => {
  let win = new BrowserWindow({
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
  win.on("closed", () => {
    win = null;
  });
  win.loadFile("desktop/index.html");
});
