function pairwise(arr, arg) {

    let usedIndexes = new Set();

    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        for (let x = 0; x < arr.length - 1; x++) {
            if (x == i) continue;
            const possiblePair = arr[x];
            if (currentElement + possiblePair == arg) {
                usedIndexes.add(i);
                usedIndexes.add(x);
            }
        }
    }
    return Array.from(usedIndexes).reduce((accumulator, item) => {
        accumulator += item;
        return accumulator;
    }, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));