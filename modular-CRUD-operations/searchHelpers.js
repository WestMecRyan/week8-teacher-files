// searchHelpers.js
function findItem(constraintFn) {
  return data.find(constraintFn);
}


function getLength(data) {
  return data.length;
}
module.exports = { findItem, deleteItem, getLength };
