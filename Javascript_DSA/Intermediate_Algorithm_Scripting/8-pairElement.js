function pairElement(str) {
    return str.split("").map(character => completePair(character).split(""))
}

function completePair(str) {
    let completePair = "";
    switch (str) {
        case 'T':
            completePair = 'TA';
            break;
        case 'A':
            completePair = 'AT';
            break;
        case 'G':
            completePair = 'GC';
            break;
        case 'C':
            completePair = 'CG';
            break;
        default:
            completePair = str;
            break;
    }
    return completePair;
}

console.log(pairElement("ATCGA"));

//Failed:pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

//ChatGPT's version:
// function pairElement(str) {
//     const pairs = {
//         'T': 'A',
//         'A': 'T',
//         'G': 'C',
//         'C': 'G'
//     };

//     return str.split("").map(character => pairs[character] || character);
// }
// takeaway: chatGPT uses a pair object instead of that function with a switch like i did