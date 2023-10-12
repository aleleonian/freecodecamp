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


/* 

ChatGPT's version which i do not understand:

function sumPrimes(num) {
    let accumulator = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            accumulator += i;
        }
    }
    return accumulator;
}

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

I apologize for any confusion. Let me explain the `isPrime` function and the part about checking factors up to the square root more clearly.

In the `isPrime` function, the goal is to determine whether a given number is a prime number. Here's a step-by-step breakdown of the function:

1. We start by handling some special cases:
   - If the number is less than or equal to 1, we return `false` because prime numbers are defined as greater than 1.
   - If the number is 2 or 3, we return `true` because they are prime.

2. Next, we check divisibility by 2 and 3. If the number is divisible by 2 or 3, we return `false` because prime numbers should not be divisible by any number other than 1 and themselves.

3. The key optimization is in the following loop:
   - We start the loop with `i` set to 5.
   - We increment `i` by 6 in each iteration. This is based on an optimization because, except for 2 and 3, all prime numbers can be expressed in the form 6k ± 1, where `k` is a positive integer. So, we check both `i` and `i + 2` in each iteration.
   - In the loop, we check if the number is divisible by `i` or `i + 2`. If it is, we return `false` because it's not a prime number.

4. Finally, if the loop doesn't find any factors (divisors) up to the square root of the number, we return `true`, indicating that the number is prime.

The optimization here is that instead of checking every number up to `number - 1`, which can be slow for large numbers, we only need to check numbers up to the square root of the number (rounded up) because any factor greater than the square root would have a corresponding factor smaller than the square root.

I hope this explanation clarifies the `isPrime` function and the optimization used for checking factors up to the square root of the number.
*/