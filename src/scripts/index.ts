const fs = require("fs");
const { exec } = require("child_process");
const days = require("./tools/days");
const navigatorType = require("./types/navigator");
const batteryEventType = require("./types/batteryEvent");

type navigatorType = InstanceType<typeof navigatorType>;
type batteryEventType = InstanceType<typeof batteryEventType>;

const time = document.querySelector("#time");
const timeWidget = document.querySelector("#timeWidget");
const battery = document.querySelector("#battery");
const navbar = document.querySelector("#navbar");

function makeToolbar() {
  if (!fs.existsSync("apps.json")) fs.writeFileSync("apps.json", "{}");
	if (navbar === null) return;

  const shortcuts = JSON.parse(fs.readFileSync("apps.json"));
	const shortcutNames = Object.keys(shortcuts);

  shortcutNames.forEach(appName => {
    const app = shortcuts[appName];
    navbar.innerHTML += `<img qapp src="${app.icon}" style="width: 32px; height: 32px; vertical-align: middle; text-align: center; margin-right: 20px">`;
  });
  shortcutNames.forEach((e, index) => {
    const imgElement: HTMLElement | null = document.querySelectorAll("img[qapp]")[index] as HTMLElement;
		const { click } = shortcuts[e]; 

		if (imgElement === null) return;

		imgElement.onclick = () => exec(click);
	});
};

function changeWallpaper() {
  const wp: HTMLImageElement | null = document.querySelector("#wp");

	if (wp === null) return;

  const backgrounds = fs.readdirSync("./src/wallpapers");
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const background = backgrounds[randomIndex];
  wp.src = `./wallpapers/${background}`;
};

function fixTime(num: number): string {
  return num <= 9 ? `0${num.toString()}` : num.toString();
};

function updateTime(currentTime: any) {
	const day = currentTime.getDay();
	const hour = currentTime.getHours();
	const minute = currentTime.getMinutes();
	const second = currentTime.getSeconds();

	if (timeWidget === null || time === null) return;

  time.innerHTML = `${hour}:${fixTime(minute)}:${fixTime(second)}`;
  timeWidget.innerHTML = `
    <h1> ${hour}:${fixTime(minute)} </h1> <br>
    <h2> ${days[day]} </h2>
  `; 
};

function updateBattery() {
	if (battery === null) return;

	const navigatorExtended = navigator as navigatorType;
  navigatorExtended.getBattery().then((event: batteryEventType) => {
    battery.innerHTML = `${event.level.toString()}%`;
  }); 
}

function update() {
  const currentTime = new Date();

  updateTime(currentTime);
	updateBattery();
}

changeWallpaper();
makeToolbar();
setInterval(changeWallpaper, 90000);
setInterval(update, 1000);
