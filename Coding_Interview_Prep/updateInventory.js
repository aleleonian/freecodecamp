// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {

    arr2.forEach(item => {
        const itemIndex = findItem(item[1], arr1);
        if (itemIndex == -1) {
            addItem(item, arr1);
        }
        else {
            updateItem(item, arr1, itemIndex);
        }
    });
    return arr1.sort((a, b) => a[1].toUpperCase().localeCompare(b[1].toUpperCase()));
}

function findItem(whatItem, where) {
    return where.findIndex((item) => {
        return item[1].toLowerCase() === whatItem.toLowerCase();
    })
}

function addItem(whatItem, where) {
    if (typeof whatItem[0] == "number" && typeof whatItem[1] === "string") {
        where.push(whatItem);
    }
}

function updateItem(whatItem, where, itemIdex) {
    where[itemIdex][0] += whatItem[0];
    return 
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));


// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
