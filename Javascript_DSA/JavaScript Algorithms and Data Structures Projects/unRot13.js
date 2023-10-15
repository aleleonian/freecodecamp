

function rot13(str) {
    let translatedString = "";
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (!currentChar.match(/\W+|_|\s+/)) {
            let charPosition = alphabet.indexOf(currentChar);
            charPosition = (charPosition + 13) % alphabet.length;
            currentChar = alphabet[charPosition];
        }
        translatedString += currentChar;
    }
    return translatedString;
}

console.log(rot13("SERR PBQR PNZC"));