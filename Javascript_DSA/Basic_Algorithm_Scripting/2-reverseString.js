function reverseString(str) {
  return str
    .split("")
    .map((character, index, array) => array[array.length - 1 - index])
    .join("");
}

console.log(reverseString("hello"));

/*

ChatGPT's version:
function reverseString(str) {
    return str.split("").reverse().join("");
}

Takeaways: i could have used the reverse() method on the array

*/