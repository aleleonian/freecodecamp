function selectionSort(array) {
    // Only change code below this line
    for (let i = 0; i < array.length - 1; i++) {
        let currentElement = array[i];
        for (let x = i + 1; x < array.length; x++) {
            if (array[x] < currentElement) {
                array[i] = array[x];
                array[x] = currentElement;
                currentElement = array[i];
            }
        }
    }
    return array;
    // Only change code above this line
}

console.log(selectionSort([3, 2, 10, 0, 9, 4, 5, 2, 13, 1]));