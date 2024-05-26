
type BatteryEvent = {
	level: number,
	charging: boolean
}

export type BatteryResult = object | BatteryEvent | Event;
