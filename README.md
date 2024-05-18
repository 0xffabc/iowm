# iowm
A lightweight electron based window manager
Works as repalcement for explorer.exe on windows and a window manager on linux (currently in a progress)

## Installation

- Clone the github repository, download it and put somewhere on the drive.
- Install [node.js](https://nodejs.org)
- Go to the root folder of project and run this sequence of commands:
  ```bash
    npm install # Installs requirements for the project (electron and etc.)
  ```
- Create a startup script that launches `npm run debug` or `npm run start` in the root folder of project

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
| dwm.exe replacing | Undone | Modify windows' window manager | Medium
| Advanced wallpaper configuration | Uncode | Configure timeout of wallpapers change and the order of changing wallpapers | Easy |
| Add applications like codemirror | Undone | Remind users that whole WM / DE is done in electron | Easy |
| Make a window manager implementation for web apps running in electron | Undone | Make a borders, toolbar and tiling support for web apps, so they will be integrated with ones running on the system | Easy |
