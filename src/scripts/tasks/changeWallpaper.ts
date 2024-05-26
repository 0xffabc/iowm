

function changeWallpaperTask() {
  const wp: HTMLImageElement | null = document.querySelector("#wp");

  if (wp === null) return;

  const backgrounds = (require("fs")).readdirSync("./src/wallpapers");
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const background = backgrounds[randomIndex];
  wp.src = `./wallpapers/${background}`;
};

module.exports = changeWallpaperTask;