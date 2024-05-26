
type navigatorExtend = {
	getBattery: () => Promise<object>
}

export type navType = Navigator & navigatorExtend;
