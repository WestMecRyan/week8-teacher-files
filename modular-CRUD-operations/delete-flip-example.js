const item1 = { name: "Milk", category: "Dairy" };
const item2 = { name: "Apple", category: "Produce" };

const constraintFn = (item) => item.category === "Dairy";

// For Milk:
constraintFn(item1)  // Returns: true (it IS dairy)
!constraintFn(item1) // Returns: false (so filter WON'T keep it)

// For Apple:
constraintFn(item2)  // Returns: false (it's NOT dairy)
!constraintFn(item2) // Returns: true (so filter WILL keep it)