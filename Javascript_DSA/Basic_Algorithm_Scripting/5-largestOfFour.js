function largestOfFour(arr) {
    return arr.map(subArray => {
        subArray.sort((a, b) => b - a);
        return subArray.slice(0, 1)[0];
    })
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));