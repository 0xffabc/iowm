const { BrowserWindow, app } = require("electron");

app.on("window-all-closed", () => {
  app.quit();
});

app.on("ready", () => {
  let win = new BrowserWindow({
    width: 1920 * 0.8,
    height: 1080 * 0.8,
    webSecurity: false,
    webPreferences: {
       nodeIntegration: true,
       contextIsolation: false,
     }
  });
  win.loadFile("../desktop/index.html");
  win.on("closed", () => {
    win = null;
  });
});
