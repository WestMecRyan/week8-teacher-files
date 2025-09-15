// searchHelpers.js
function findItem(constraintFn, readFile, filePath) {
  const data = readFile(filePath);
  let foundItem = data.find(constraintFn);
  // const foundUser = users.method(constraintFn);
  return foundItem;
}
function deleteItem(constraintFn, readFile, writeFile, filePath) {
  const data = readFile(filePath);
  const dataIndex = data.findIndex(constraintFn);
  if (dataIndex !== -1) {
    data.splice(dataIndex, 1);
    writeFile(filePath, data);
    return "item deleted";
  }
  return "Item not found";
}

module.exports = { findItem, deleteItem };
