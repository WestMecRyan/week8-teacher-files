PUT and PATCH represent two different update strategies:

## PUT vs PATCH Conceptually

**PUT** = Replace the entire resource
**PATCH** = Update only specific fields

## Implementation:## Usage Examples:

```javascript
const { putItem, patchItem } = require("./updateHelpers.js");

// PUT - Replace entire user (except ID)
const newUserData = {
  firstName: "Johnny",
  lastName: "Smith",
  phone: "555-999-8888",
  email: "johnny.smith@newemail.com"
};

const updatedUser = putItem(
  (user) => user.firstName === "John",
  newUserData,
  readFile,
  writeFile,
  filePath
);

// PATCH - Update only specific fields
const updates = {
  phone: "555-111-2222",
  email: "john.newemail@gmail.com"
};

const patchedUser = patchItem(
  (user) => user.firstName === "John",
  updates,
  readFile,
  writeFile,
  filePath
);
```

## Teaching the Difference:

**PUT Example** - Grocery item:
```javascript
// Original item
{ id: "123", name: "Bananas", category: "Produce", price: 1.29, organic: true }

// PUT with new data
putItem((item) => item.name === "Bananas", {
  name: "Bananas",
  category: "Produce",
  price: 1.49  // Missing organic field!
}, readFile, writeFile, groceriesPath);

// Result: { id: "123", name: "Bananas", category: "Produce", price: 1.49 }
// Notice: organic field is gone!
```

**PATCH Example** - Same grocery item:
```javascript
// Original item
{ id: "123", name: "Bananas", category: "Produce", price: 1.29, organic: true }

// PATCH with updates
patchItem((item) => item.name === "Bananas", {
  price: 1.49
}, readFile, writeFile, groceriesPath);

// Result: { id: "123", name: "Bananas", category: "Produce", price: 1.49, organic: true }
// Notice: organic field is preserved!
```

## Complete CRUD Operations:
- **C**reate: `writeFile()` with new data
- **R**ead: `findItem()` or `readFile()`
- **U**pdate: `putItem()` (replace) or `patchItem()` (modify)
- **D**elete: `deleteItem()`
