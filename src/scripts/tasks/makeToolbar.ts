const fs_ = require("fs");
const exec_ = require("child_process").exec;
const navbar = document.querySelector("#navbar");

function makeToolbarTask() {
  if (!fs_.existsSync("apps.json")) fs_.writeFileSync("apps.json", "{}");
  if (navbar === null) return;

  const shortcuts = JSON.parse(fs_.readFileSync("apps.json"));
  const shortcutNames = Object.keys(shortcuts);

  shortcutNames.forEach(appName => {
    const app = shortcuts[appName];
    navbar.innerHTML += `<img qapp src="${app.icon}" style="width: 32px; height: 32px; vertical-align: middle; text-align: center; margin-right: 20px">`;
  });
  shortcutNames.forEach((e, index) => {
    const imgElement: HTMLElement | null = document.querySelectorAll("img[qapp]")[index] as HTMLElement;
		const { click } = shortcuts[e]; 

		if (imgElement === null) return;

		imgElement.onclick = () => exec_(click);
	});
};

module.exports = makeToolbarTask;