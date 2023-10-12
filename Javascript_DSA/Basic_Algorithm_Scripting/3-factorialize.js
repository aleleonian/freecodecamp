function factorialize(num) {
    let factorial = 1;

    if (num === 0) return 1;
    else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
    }
    return factorial;
}

console.log(factorialize(5));