function sumPrimes(num) {

    let accumulator = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) accumulator += i;
    }
    return accumulator;
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(sumPrimes(10));