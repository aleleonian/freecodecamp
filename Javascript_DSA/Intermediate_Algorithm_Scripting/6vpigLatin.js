function translatePigLatin(str) {

    if (isVowel(str.charAt(0))) {
        return str + "way";
    }
    else {
        str = str.split("");
        let firstVowelIndex = str.findIndex(letter => {
            return isVowel(letter)
        });
        let consonants = str.splice(0, firstVowelIndex);
        str = str.concat(consonants);
        str = str.join("") + "ay";
        return str;
    }
}

function isVowel(char) {
    return char.match(/a|e|i|o|u/);
}

console.log(translatePigLatin("consonant"));

//ChatGPT's version:
// function translatePigLatin(str) {
//     const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char);
  
//     if (isVowel(str[0])) {
//       return str + 'way';
//     } else {
//       const firstVowelIndex = str.split('').findIndex(isVowel);
//       const consonants = str.slice(0, firstVowelIndex);
//       return str.slice(firstVowelIndex) + consonants + 'ay';
//     }
//   }
  

// takeaways: next time write my function like this:
// const isVowel = (char) => char.match(/a|e|i|o|u/);
// try to not modify the input (i used splice)
// learn how to better use slice
// you can use slice on a string without first transforming it into an array
// if you pass one argument to slice then it will slice the string or array at that position
// and return the rest 
// example:
// "alejandro".slice(3) = 'jandro'
// if you pass two arguments, then it will slice from the first index to the second one and 
// return that
// example:
// "alejandro".slice(0,3) = 'ale'

//