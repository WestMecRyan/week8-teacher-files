The spread operator `...updates` doesn't "know" to change specific keys - it works by **overwriting properties with the same name**. Let me show you exactly how this works:

## Step-by-step breakdown:

```javascript
// Original item in the array:
const originalItem = {
  id: "123",
  name: "Bananas",
  category: "Produce",
  price: 1.29,
  organic: false
};

// Your updates object:
const updates = {
  price: 1.79,
  organic: true
};

// When you do: { ...originalItem, ...updates }
// JavaScript creates a new object like this:
```

## What happens step by step:

**Step 1:** Spread `originalItem` first:
```javascript
{
  id: "123",
  name: "Bananas",
  category: "Produce",
  price: 1.29,        // Original price
  organic: false      // Original organic
}
```

**Step 2:** Then spread `updates` (this overwrites matching keys):
```javascript
{
  id: "123",
  name: "Bananas",
  category: "Produce",
  price: 1.79,        // ✅ OVERWROTE the original price: 1.29
  organic: true,      // ✅ OVERWROTE the original organic: false
}
```

## The key insight:

The spread operator works by **property name matching**:
- If `updates` has a property called `price`, it **replaces** the existing `price`
- If `updates` has a property called `organic`, it **replaces** the existing `organic`
- Properties in `updates` that don't exist in the original get **added**
- Properties in the original that aren't in `updates` stay **unchanged**

## Visual example:

```javascript
const original = { a: 1, b: 2, c: 3 };
const updates = { b: 99, d: 4 };

const result = { ...original, ...updates };
// Result: { a: 1, b: 99, c: 3, d: 4 }

// Breakdown:
// a: 1  (unchanged - not in updates)
// b: 99 (changed - was 2, now 99 from updates)
// c: 3  (unchanged - not in updates)
// d: 4  (added - new property from updates)
```

JavaScript objects **cannot have duplicate keys**, so when you spread multiple objects with the same key names, the **last one wins**.

## Perfect example:

```javascript
const original = { name: "John", age: 25, city: "Phoenix" };
const updates = { age: 30, job: "Developer" };

const result = { ...original, ...updates };

// JavaScript can't have two "age" keys in the same object, so:
// - The first "age: 25" gets overwritten by
// - The second "age: 30"

// Final result: { name: "John", age: 30, city: "Phoenix", job: "Developer" }
```

## Order matters:

```javascript
// updates AFTER original - updates wins
{ ...original, ...updates }  // age: 30

// updates BEFORE original - original wins
{ ...updates, ...original }  // age: 25
```

## This is why PATCH works:

```javascript
// In your patchItem function:
data[itemIndex] = { ...data[itemIndex], ...updates };
//                     ^existing data    ^new data wins
```

The `updates` object **overwrites** any matching keys from the existing data, while leaving non-matching keys untouched.

## Multiple spreads work the same way:

```javascript
const a = { x: 1, y: 2 };
const b = { y: 99, z: 3 };
const c = { z: 100, w: 4 };

const result = { ...a, ...b, ...c };
// Result: { x: 1, y: 99, z: 100, w: 4 }
// y: 1 → 99 → stays 99
// z: 3 → 100 (c overwrote b)
```

It's all about **"last one wins"** when there are duplicate keys.