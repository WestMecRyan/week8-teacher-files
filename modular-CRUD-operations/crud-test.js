// crud-test.js

const fs = require("fs");
const path = require("path");
const fileName = "./groceriesDB.json";
const filePath = path.join(__dirname, "data", fileName);
const usersJS = require("./users.js");
const groceriesJS = require("./groceries.js");
const {
  writeFile,
  readFile,
  addId,
  deleteFile,
  sleep,
} = require("./fileHelpers.js");
const { findItem, deleteItem } = require("./searchHelpers.js");
// console.log(users);
// console.log("stringify", JSON.stringify(users, null, 2));
deleteFile(filePath);
sleep(0000);
// const usersWithId = addId(usersJS);
const groceriesWithId = addId(groceriesJS);
writeFile(filePath, groceriesWithId);

const expensiveItem = findItem((item) => item.price > 5, readFile, filePath);
console.log(expensiveItem);
