const { exec } = require("child_process");

console.log("[*] Compiling typescript files...");

exec("tsc");

console.log("[*] Bundling with webpack...");

exec("webpack");

