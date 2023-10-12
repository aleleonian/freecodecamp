function sumFibs(num) {

    const fibSequence = [0, 1];

    let accumulator = 0;

    for (let i = 1; i <= num; i++) {
        fibSequence.push(fibSequence[i] + fibSequence[i - 1]);
        if (fibSequence[i] > num) break;
        if (fibSequence[i] % 2 != 0) {
            accumulator += fibSequence[i];
        }
    }
    return accumulator;
}

console.log(sumFibs(4));