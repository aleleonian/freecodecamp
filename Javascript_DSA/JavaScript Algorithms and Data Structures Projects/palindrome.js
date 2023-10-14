function palindrome(str) {

    str = str.toLowerCase().split(/[\W+|_]/).join("");

    let palindrome = true;
    let start = 0;
    let end = str.length - 1;

    for (let i = 0; start <= end; i++) {
        if (str[start] !== str[end]) {
            palindrome = false;
            break;
        }
        start++;
        end--;
    }


    return palindrome;
}

console.log(palindrome("a"));

/*
ChatGPT's version:
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[\W_]/g, '').toLowerCase();

    for (let start = 0, end = str.length - 1; start < end; start++, end--) {
        if (str[start] !== str[end]) {
            return false; // If a mismatch is found, it's not a palindrome
        }
    }
    return true; // If no mismatch is found, it's a palindrome
}

Takeaways:

+ I could have done without the variale i
+ i could have included the start++ and end-- in the for loop definition
*/