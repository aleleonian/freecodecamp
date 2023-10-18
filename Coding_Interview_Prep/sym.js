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

/* 

function sym(...args) {
  const symmetricDifference = args.reduce((accumulator, currentArray) => {
    const setA = new Set(accumulator);
    const setB = new Set(currentArray);

    const diffA = [...setA].filter(item => !setB.has(item));
    const diffB = [...setB].filter(item => !setA.has(item));

    return new Set([...diffA, ...diffB]);
  }, []);

  return [...symmetricDifference];
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));

We use Set to efficiently handle unique values in arrays.
We find the symmetric difference of two sets using filter and the has method, 
which is more efficient than repeatedly calling indexOf.
The symmetric differences are combined into a single Set.
The final symmetric difference is converted back to an array before returning it.
This code maintains the original logic but makes it more concise and efficient.




Takeaways:

When you initialize a new Set with an array, it automatically removes duplicates.

*/