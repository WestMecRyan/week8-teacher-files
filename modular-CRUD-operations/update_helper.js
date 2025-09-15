// updateHelpers.js

// PUT - Replace entire item (except ID)
function putItem(constraintFn, newItemData, readFile, writeFile, filePath) {
  const data = readFile(filePath);
  const itemIndex = data.findIndex(constraintFn);

  if (itemIndex !== -1) {
    // Keep the original ID, replace everything else
    const originalId = data[itemIndex].id;
    data[itemIndex] = { ...newItemData, id: originalId };
    writeFile(filePath, data);
    return data[itemIndex];
  }
  return null;
}

// PATCH - Update only specified fields
function patchItem(constraintFn, updates, readFile, writeFile, filePath) {
  const data = readFile(filePath);
  const itemIndex = data.findIndex(constraintFn);

  if (itemIndex !== -1) {
    // Merge updates with existing item
    data[itemIndex] = { ...data[itemIndex], ...updates };
    writeFile(filePath, data);
    return data[itemIndex];
  }
  return null;
}

module.exports = { putItem, patchItem };