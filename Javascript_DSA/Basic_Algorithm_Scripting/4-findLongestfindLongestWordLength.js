function findLongestWordLength(str) {
    return str.split(/\s+/).reduce((accumulator, currentWord) => currentWord.length > accumulator ? currentWord.length : accumulator, 0);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));