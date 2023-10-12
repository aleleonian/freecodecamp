function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let accumulator = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        accumulator += i;
    }
    return accumulator;
}