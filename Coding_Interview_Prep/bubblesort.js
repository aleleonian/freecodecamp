function bubbleSort(array) {
    // Only change code below this line
    while (true) {
        let swappedStuff = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swappedStuff = true;
            }
        }
        if (!swappedStuff) break;
    }
    return array;
    // Only change code above this line
}


console.log(bubbleSort([1, 92, 3]));