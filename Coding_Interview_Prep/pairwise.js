function pairwise(arr, arg) {

    let usedIndexes = new Set();

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (usedIndexes.has(i)) continue;
        for (let x = 0; x < arr.length; x++) {
            if (x == i) continue;
            const possiblePair = arr[x];
            if (usedIndexes.has(x)) continue;
            if (currentElement + possiblePair == arg) {
                usedIndexes.add(i);
                usedIndexes.add(x);
                break;
            }
        }
    }
    return Array.from(usedIndexes).reduce((accumulator, item) => {
        accumulator += item;
        return accumulator;
    }, 0);
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));