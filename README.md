# iowm

A lightweight electron based window manager

![image](https://github.com/0xffabc/iowm/assets/139798156/5865fc47-ae71-4e1a-85e0-7c26aa629924)

## Notice

This program is not recommended on windows, since after some tests it turned out
on low end machines with windows 10 especially running toolbar as a new browserwindow
hangs out whole system for an unknown reason

For linux: runs on xserver

## Installation

- Clone the [github repository](https://github.com/0xffabc/iowm), download it and put somewhere on the drive. help: [Github docs](https://docs.github.com/repositories/creating-and-managing-repositories/cloning-a-repository)
- Install [node.js](https://nodejs.org)
- Go to the root folder of project and run this sequence of commands:
  ```bash
    npm install # Installs requirements for the project (electron and etc.)
  ```
- Create a startup script that launches `npm run debug` or `npm run start` in the root folder of project. help: [Windows](https://support.microsoft.com/en-us/windows/pin-apps-and-folders-to-the-desktop-or-taskbar-f3c749fb-e298-4cf1-adda-7fd635df6bb0) [Linux](<https://unix.stackexchange.com/questions/84686/how-to-create-custom-commands-in-unix-linux>)

## Debug vs Start

This window manager can run in 2 modes - debugging and sthe actual start.
Debugging mode doesn't kill explorer.exe on windows and doesn't set "focusable" property in electron browserwindow options

## Adding shortcuts on the toolbar

In the root folder of project, there's a file called "apps.json".
This file includes toolbar shortcuts in this format:
```json
{
  "shortcutName": {
     "icon": "shortcutIconURL",
     "click": "shortcutCommandLine"
  }
}
```
Basic toolbar configuration example:

```json
{
  "Firefox ESR": {
    "icon": "https://icons.iconarchive.com/icons/carlosjj/mozilla/32/Firefox-icon.png",
    "click": "firefox-esr"
  }
}
```

## Dynamic wallpaper configuration

In the root folder of project there's a directory - wallpaper.
In the wallpaper directory there's another directory - wp.
"wp" directory contains all the wallpapers, among these wallpapers io will randomly pick any image and use it.

## Desktop configuration

The desktop is fully written in HTML, and it can be modified.
the index.html file is located at project root's desktop folder.

## Planned features

| Feature | Status | Description | Difficulty |
| ------- | ------ | ----------- | ---------- |
| Advanced wallpaper configuration | Uncode | Configure timeout of wallpapers change and the order of changing wallpapers | Easy |
| Add applications like codemirror | Undone | Remind users that whole WM / DE is done in electron | Easy |
| Make a window manager implementation for web apps running in electron | Undone | Make a borders, toolbar and tiling support for web apps, so they will be integrated with ones running on the system | Easy |
