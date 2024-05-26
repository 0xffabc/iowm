const fs = require("fs");
const { exec } = require("child_process");

const makeToolbar = require("./tasks/makeToolbar");
const changeWallpaper = require("./tasks/changeWallpaper");
const updateTime = require("./tasks/updateTime");
const updateBattery = require("./tasks/updateBattery");

function update() {
  const currentTime = new Date();

  updateTime(currentTime);
  updateBattery();
}

changeWallpaper();
makeToolbar();
setInterval(changeWallpaper, 90000);
setInterval(update, 1000);
