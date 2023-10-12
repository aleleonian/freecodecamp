function solution(A) {
    const n = A.length;
    const positiveSet = new Set();

    // Create a Set to store positive integers from the input array
    for (let i = 0; i < n; i++) {
        if (A[i] > 0) {
            positiveSet.add(A[i]);
        }
    }

    // Find the smallest positive integer that is not in the Set
    for (let i = 1; i <= n + 1; i++) {
        if (!positiveSet.has(i)) {
            return i;
        }
    }

    return 1; // Fallback, in case the array contains all positive integers from 1 to n
}

// Example usage:
console.log(solution([1, 3, 6, 4, 1, 2])); // Should return 5
console.log(solution([1, 2, 3])); // Should return 4
console.log(solution([-1, -3])); // Should return 1
