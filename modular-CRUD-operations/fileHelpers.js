// fileHelpers.js
const path = require("path");
const fs = require("fs");

function writeFile(filePath, data) {
  const dataDir = path.dirname(filePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.log("No users file found, starting with empty array");
    return [];
  }
}

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}

module.exports = { writeFile, readFile, deleteFile, sleep };
