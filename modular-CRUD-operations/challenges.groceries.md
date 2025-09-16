# 30-Minute CRUD Practice Challenges

## Setup Instructions
1. Reset your groceries database by running `addGroceriesId()`
2. Complete each challenge by writing the function and testing it
3. Comment out previous challenges before moving to the next one

---

## **FIND Challenges** (5 minutes)

### Challenge 1: Expand the findOne switch cases
Add these new cases to your `findOne` function:
- `"firstBakery"` - find first bakery item
- `"heaviestQuantity"` - find item with highest quantity


### Challenge 2: Write custom find functions
```javascript
function findByCategory(category) {
  // Find the first item in a specific category
  // Usage: findByCategory("Meat")
}

function findItemsOver(price) {
  // Return ALL items over a certain price (use filter)
  // Usage: findItemsOver(4.00)
}
```

---

## **DELETE Challenges** (8 minutes)

### Challenge 3: Category cleanup
```javascript
function deleteExpensiveItems() {
  // Delete all items over $5.00
}

function deleteLowStock() {
  // Delete all items with quantity less than 2
}

function deleteNonOrganic() {
  // Delete all non-organic items
}
```

### Challenge 4: Smart deletion
```javascript
function deleteByUnit(unit) {
  // Delete all items sold by a specific unit
  // Usage: deleteByUnit("ounces")
}

function deleteCheapProduce() {
  // Delete produce items under $3.00 (combine two conditions!)
}
```

---

## **PATCH Challenges** (8 minutes)

### Challenge 5: Price adjustments
```javascript
function applyInflation() {
  // Increase ALL item prices by 10% (you'll need to read, modify, write)
  // Hint: Use map() to update all items
}

function putOnSale(itemName) {
  // Add an "onSale: true" property to a specific item
  // Usage: putOnSale("Bananas")
}

function updateQuantity(itemName, newQuantity) {
  // Update just the quantity of a specific item
  // Usage: updateQuantity("Milk", 10)
}
```

### Challenge 6: Bulk updates
```javascript
function markOrganicProduce() {
  // Add "certified: true" to all organic produce items
  // Hint: You'll need to filter for organic AND produce, then update each
}

function adjustMeatPrices() {
  // Reduce all meat prices by $1.00
}
```

---

## **PUT Challenges** (5 minutes)

### Challenge 7: Complete replacements
```javascript
function replaceItem(oldName, newItemData) {
  // Completely replace an item with new data (keeping the ID)
  // Usage: replaceItem("Rice", { name: "Brown Rice", category: "Pantry", price: 3.49, quantity: 1, unit: "bag", organic: true })
}

function upgradeToOrganic(itemName) {
  // Replace an item with an organic version (keep same name/category, increase price by $1, set organic: true)
}
```

---

## **ADVANCED Challenges** (4 minutes)

### Challenge 8: Create a shopping report function
```javascript
function generateShoppingReport() {
  // Return an object with:
  // - totalItems: number of items in store
  // - totalValue: sum of all (price * quantity)
  // - categories: array of unique categories
  // - averagePrice: average price of all items
  // - organicCount: number of organic items
}
```

### Challenge 9: Add more switch cases to findOne
Add these cases to your `findOne` switch:
- `"organicProduce"` - return ALL organic produce items
- `"dairyUnder5"` - return ALL dairy items under $5
- `"meatInventory"` - return ALL meat items with their quantities
- `"cheapestByCategory"` - return the cheapest item from each category

### Challenge 10: Create a inventory management function
```javascript
function lowStockAlert() {
  // Return all items with quantity <= 2
  // Add a "needsRestock: true" property to each
  // Write the updated data back to file
}

function expensiveItemsReport() {
  // Find all items over $4
  // Group them by category
  // Return an object like: { "Meat": [items], "Dairy": [items] }
}
```

---

## **Bonus Round** (if time remains)

### Challenge 11: Build a search function
```javascript
function searchItems(searchTerm) {
  // Find all items whose name contains the search term (case-insensitive)
  // Usage: searchItems("ch") should find "Chicken Breast" and "Cheddar Cheese"
}

function filterByMultipleConditions(minPrice, maxPrice, category) {
  // Return items that match ALL conditions:
  // - price between minPrice and maxPrice
  // - in the specified category
  // Usage: filterByMultipleConditions(3, 6, "Dairy")
}
```

---

## **Testing Template**
Use this template to test each challenge:

```javascript
// Reset data
addGroceriesId();

// Test your function
console.log("Before:");
console.log(readFile(groceriesDBpath));

// Your function call here
yourFunction();

console.log("After:");
console.log(readFile(groceriesDBpath));
```

---

## **Success Criteria**
- ✅ Functions work without errors
- ✅ Data is properly read from and written to the file
- ✅ Constraint functions use proper arrow function syntax
- ✅ You understand when to use find vs filter vs findIndex
- ✅ You can explain the difference between PUT and PATCH operations
- `"cheapest"` - find item with lowest price
- `"mostExpensive"` - find item with highest price
```javascript
// Test your cases:
console.log(findOne(groceriesDBpath, "cheapest"));
console.log(findOne(groceriesDBpath, "mostExpensive"));
```