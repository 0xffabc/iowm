const { exec } = require("child_process");
const fs = require("fs");

console.log("[*] Compiling typescript files...");

exec("tsc");

console.log("[*] Bundling with webpack...");

exec("webpack");

console.log("[*] Merging base.html and Injection.js -> index.html...");

const injection = fs.readFileSync("./src/Injection.js", "utf8");
const base = fs.readFileSync("./src/base.html", "utf8");

const inner = base.replace("{MERGE}", injection);

fs.writeFileSync("./src/index.html", inner);

console.log("[*] Merged base.html and Injection.js!");