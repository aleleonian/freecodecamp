

function rot13(str) {
    let translatedString = "";
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (!currentChar.match(/\W+|_|\s+/)) {
            let charPosition = alphabet.indexOf(currentChar);
            if (charPosition + 13 >= alphabet.length) {
                charPosition = (charPosition + 13) % alphabet.length;
            }
            else {
                charPosition += 13;
            }
            currentChar = alphabet[charPosition];
        }
        translatedString += currentChar;
    }
    return translatedString;
}

console.log(rot13("SERR PBQR PNZC"));