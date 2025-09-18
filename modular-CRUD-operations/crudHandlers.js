// crudHandlers.js
const { readFile, writeFile } = require("./fileHelpers");

function findOne(filePath, type) {
  const data = readFile(filePath);
  switch (type) {
    case "firstExpensive":
      return data.find((item) => item.price > 5);
      break;
    case "lastExpensive":
      return data.findLast((item) => item.price > 5);
      break;
    case "firstOrganicIndex":
      return data.findIndex((item) => item.organic);
      break;
    case "lastOrganicIndex":
      return data.findLastIndex((item) => item.organic);
      break;
  }
}
function addId(data) {
  const copy = data.map((item) => ({ ...item })); // teach how this comes from returning object literal
  copy.forEach((item, index) => {
    if (!item.id) {
      item["id"] = (Date.now() + index).toString();
    }
  });
  return copy;
}

function deleteFirstItem(filePath, constraintFn) {
  const data = readFile(filePath);
  const dataIndex = data.findIndex(constraintFn);
  if (dataIndex !== -1) {
    data.splice(dataIndex, 1);
    writeFile(filePath, data);
    return "item deleted";
  }
  return "Item not found";
}
function deleteAll(filePath, constraintFn) {
  const data = readFile(filePath);
  const remainingItems = data.filter((item) => !constraintFn(item));
  writeFile(filePath, remainingItems);
  const deletedCount = data.length - remainingItems.length;
  return `Deleted ${deletedCount} items`;
}

function putItem(filePath, constraintFn, newItemData) {
  const data = readFile(filePath);
  const itemIndex = data.findIndex(constraintFn);
  if (itemIndex === -1) {
    return "Item not found";
  }
  const originalId = data[itemIndex].id;
  data[itemIndex] = { ...newItemData, id: originalId };
  writeFile(filePath, data);
  return `item updated: ${data[itemIndex]}`;
}

function patchItem(filePath, constraintFn, updates) {
  const data = readFile(filePath);
  const itemIndex = data.findIndex(constraintFn);
  if (itemIndex === -1) {
    return "item not found";
  }
  data[itemIndex] = { ...data[itemIndex], ...updates };
  writeFile(filePath, data);
  return `Item patched ${data[itemIndex]}`;
}

module.exports = {
  findOne,
  deleteFirstItem,
  deleteAll,
  addId,
  putItem,
  patchItem,
};
