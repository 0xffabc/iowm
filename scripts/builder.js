const { execSync } = require("child_process");
const fs = require("fs");

console.log("[*] Compiling typescript files");

console.log(execSync("tsc").toString());

console.log("[*] Bundling with webpack");

console.log(execSync("webpack").toString());

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