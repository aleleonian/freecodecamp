function titleCase(str) {
    const words = str.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("");
        let currentWord = words[i];
        for (let x = 0; x < currentWord.length; x++) {
            if (x == 0) {
                currentWord[x] = currentWord[x].toUpperCase();
            }
            else {
                currentWord[x] = currentWord[x].toLowerCase();
            }
        }
        words[i] = currentWord.join("");
    }

    return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));


//ChatGPT's version:
// function titleCase(str) {
//     return str
//         .split(/\s+/) // Split the input string into words
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Title case each word
//         .join(" "); // Join the title-cased words back into a string
// }
