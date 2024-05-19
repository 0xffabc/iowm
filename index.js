const { BrowserWindow, app } = require("electron");
const { execSync } = require("child_process");
require("@electron/remote/main").initialize();
try { execSync("taskkill /F /IM explorer.exe") } catch(e) { }

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
  require("@electron/remote/main").enable(win.webContents);
  win.loadFile("desktop/index.html");
});