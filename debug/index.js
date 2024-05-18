const { BrowserWindow, app } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow({
    /** The most common screen dimension **/
    width: 1920 * 0.9,
    height: 1080 * 0.9,
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