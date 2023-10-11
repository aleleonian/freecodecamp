
function fearNotLetter(str) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const firstLetterPosition = alphabet.indexOf(str.charAt(0));
    const alphabetSlice = alphabet.slice(firstLetterPosition, firstLetterPosition + str.length);
    if (alphabetSlice === str) return;
    let missingChar = alphabetSlice.split("").filter(character => (str.indexOf(character) == -1 ? true : false))[0];
    return missingChar;
}

console.log(fearNotLetter("stvwx"));

//chatGPT's version:
// function fearNotLetter(str) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== alphabet[i + alphabet.indexOf(str[0])]) {
//             return alphabet[i + alphabet.indexOf(str[0])];
//         }
//     }

//     return undefined; // Return undefined if no missing letter is found
// }

//takeaways: hay veces en donde si es mejor usar un for loop y listo.
//ChatGPT dice que yo usé unnecessary string manipulations y puede que tenga razón.
