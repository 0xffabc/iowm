const navigatorType = require("./types/navigator");
const batteryEventType = require("./types/batteryEvent");
const battery = document.querySelector("#battery");

type navigatorType = InstanceType<typeof navigatorType>;
type batteryEventType = InstanceType<typeof batteryEventType>;

const navigatorExtended = navigator as navigatorType;
function updateBatteryTask() {
  if (battery === null) return;

  navigatorExtended.getBattery().then((event: batteryEventType) => {
    battery.innerHTML = `${event.level.toString()}%`;
  }); 
}

module.exports = updateBatteryTask;