

function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return str.split("").map(currentChar => {
        // is it a non letter character?
        if (currentChar.match(/\W+|_/)) {
            return currentChar;
        }
        // if not, let's conver it into the corresponding character
        else {
            let charPosition = (alphabet.indexOf(currentChar) + 13) % alphabet.length;
            return alphabet[charPosition];
        }
    })
        .join("");

    // for (let i = 0; i < str.length; i++) {
    //     let currentChar = str[i];
    //     if (!currentChar.match(/\W+|_/)) {
    //         let charPosition = alphabet.indexOf(currentChar);
    //         charPosition = (charPosition + 13) % alphabet.length;
    //         currentChar = alphabet[charPosition];
    //     }
    //     translatedString += currentChar;
    // }
    // return translatedString;
}

console.log(rot13("SERR PBQR PNZC"));

/*

ChatGPT's version:

function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    const offset = charCode < 78 ? 13 : -13;
    return String.fromCharCode(charCode + offset);
  });
}

We use the replace function with a regular expression to match uppercase letters (A-Z).

We use the String.fromCharCode and char.charCodeAt functions to calculate the new 
character based on the ROT13 transformation.

The code inside the arrow function calculates the new character code based on 
whether it needs to shift forward (e.g., 'A' becomes 'N') or backward (e.g., 'N' becomes 'A') 
by 13 positions.

This version simplifies the logic and reduces the need for manual character 
lookups and loops, making the code more concise and easier to understand.

Takeaways:

ChatGPT uses again the replace() method on a string. This is more efficient than turning
a string into an array and later again into a string.

*/