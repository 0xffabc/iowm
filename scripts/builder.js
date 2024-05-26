const { spawn } = require("child_process");
const fs = require("fs");
const conf = {
  shell: true,
  stdin: "inherit"
};

console.log("[*] Compiling typescript files");

spawn("tsc", conf);

console.log("[*] Bundling with webpack");

spawn("webpack", conf);

console.log("[*] Merging components");

const components = fs.readdirSync("./src/components");

let tempData = "<!DOCTYPE html><html><head></head><body>";

components.forEach(filename => {
  console.log("[*] Merging " + filename + " into temp HTML");
  tempData += fs.readFileSync("./src/components/" + filename, "utf8");
});

tempData += "<script defer>{MERGE}</script></body></html>";

console.log("[*] Merging temp HTML with base.html");

fs.writeFileSync("./src/base.html", tempData);

console.log("[*] Merging base.html and Injection.js -> index.html");

const injection = fs.readFileSync("./src/Injection.js", "utf8");
const base = fs.readFileSync("./src/base.html", "utf8");

const inner = base.replace("{MERGE}", injection);

fs.writeFileSync("./src/index.html", inner);

console.log("[*] Merged base.html and Injection.js!");