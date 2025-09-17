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
const { findHighestPriced } = require("./reduceHelpers.js");
// console.log(findHighestPriced(groceriesDBpath));
console.log(
  groceriesJS.reduce((accItem, currentItem) => {
    return currentItem.price < accItem.price ? currentItem : accItem;
  })
);
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
function replaceBananasWithOranges() {
  let newData = {
    name: "Oranges",
    category: "Produce",
    price: 2.59,
    quantity: 5,
    unit: "each",
    organic: true,
  };
  putItem(groceriesDBpath, (item) => item.name === "Bananas", newData);
}
// replaceBananasWithOranges();

function patchGroceryItem(name) {
  let updates = {
    quantity: 9,
    price: 4.49,
  };
  patchItem(groceriesDBpath, (item) => item.name === name, updates);
}
// patchGroceryItem("Milk"); // careful with casing
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
