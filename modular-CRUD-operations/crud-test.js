// crud-test.js
const fs = require("fs");
const path = require("path");
const groceriesDBpath = path.join(__dirname, "data", "./groceriesDB.json");
const usersDBpath = path.join(__dirname, "data", "./usersDB.json");
const usersJS = require("./users.js");
const groceriesJS = require("./groceries.js");
const { writeFile, readFile, deleteFile, sleep } = require("./fileHelpers.js");
const {
  findOne,
  deleteFirstItem,
  deleteAll,
  addId,
  putItem,
  patchItem,
} = require("./crudHandlers.js");
// console.log(users);
// console.log("stringify", JSON.stringify(users, null, 2));
// deleteFile(filePath);
// sleep(0000);
// const usersWithId = addId(usersJS);
function addGroceriesId() {
  const groceriesWithId = addId(groceriesJS);
  writeFile(groceriesDBpath, groceriesWithId);
}
addGroceriesId();

function deleteDairyProducts() {
  deleteAll(groceriesDBpath, (item) => item.category === "Dairy");
}
// deleteDairyProducts();
function updateGroceryItem() {
  let newData = {
    name: "Bananas",
    category: "Produce",
    price: 1.59,
    quantity: 8,
    unit: "each",
    organic: true,
  };
  putItem(groceriesDBpath, (item) => item.name === "Bananas", newData);
}
function patchGroceryItem(name) {
  let updates = {
    quantity: 5,
    price: 4.49,
  };
  patchItem(groceriesDBpath, (item) => item.name === name, updates);
}
patchGroceryItem("Milk"); // careful with casing
// updateGroceryItem();

// console.log(getItem(groceriesDBpath, "firstExpensive"));
// console.log(getItem("firstExpensive", usersDBpath));
// console.log(getItem("lastExpensive", groceriesDBpath));
// console.log(getItem("firstOrganicIndex", groceriesDBpath));
// console.log(getItem("lastOrganicIndex", groceriesDBpath));
function testMethods() {
  const data = readFile(groceriesDBpath);
  return data.findLastIndex((item) => item.price === 0);
}
// console.log(testMethods());
