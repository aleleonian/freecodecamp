function sym(...args) {

    let finalProduct = args.reduce((accumulator, currentArray) => {
        accumulator = arrayDiff(currentArray, accumulator);
        return accumulator;
    }, [])

    return finalProduct;
}

function arrayDiff(array1, array2) {

    let differences = new Set();

    array1.forEach(element => {
        if (array2.indexOf(element) == -1) {
            differences.add(element)
        }
    });

    array2.forEach(element => {
        if (array1.indexOf(element) == -1) {
            differences.add(element)
        }
    });
    return Array.from(differences);
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));

