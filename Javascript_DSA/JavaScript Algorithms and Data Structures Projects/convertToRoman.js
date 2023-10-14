const romanUnidades = {
    1: "I",
    5: "V",
    10: "X"
}
const romanDecenas = {
    1: "X",
    5: "L",
    10: "C"
}
const romanCentenas = {
    1: "C",
    5: "D",
    10: "M"
}

function convertToRoman(num) {

    if (Number.isNaN(num)) {
        return false;
    }
    const unidad = getUnidad(num);

    const decena = getDecena(num);

    const centena = getCentena(num);

    const millar = getMillar(num);

    const translatedUnidad = translateNumber(romanUnidades, unidad);

    const translatedDecena = translateNumber(romanDecenas, decena);

    const translatedCentena = translateNumber(romanCentenas, centena);

    const translatedMillar = translateMillarEnAdelante(millar);

    const translatedNumber = `${translatedMillar}${translatedCentena}${translatedDecena}${translatedUnidad}`;

    return translatedNumber;

}


function getUnidad(number) {
    return number % 10
}
function getDecena(number) {
    return (number % 100 - number % 10) / 10;
}
function getCentena(number) {
    return (number % 1000 - number % 100) / 100;
}
function getMillar(number) {
    return (number % 10000 - number % 1000) / 1000;
}

function translateNumber(romanLetterSet, number) {

    let translatedNumber = "";

    if (number < 5) {
        if (number == 4) {
            translatedNumber = `${romanLetterSet[1]}${romanLetterSet[5]}`;
        }
        else {
            translatedNumber = addNumbersToString(number, translatedNumber, romanLetterSet, 1);
        }
    }
    else if (number == 5) {
        translatedNumber = `${romanLetterSet[5]}`;
    }
    else {
        if (number == 9) {
            translatedNumber = `${romanLetterSet[1]}${romanLetterSet[10]}`;
        }
        else if (number == 10) {
            translatedNumber = `${romanLetterSet[10]}`;
        }
        else {
            translatedNumber = romanLetterSet[5] + addNumbersToString(number - 5, translatedNumber, romanLetterSet, 1);

        }
    }
    return translatedNumber;

    function addNumbersToString(number, string, letterSet, whichRomanEquivalent) {
        for (let i = 0; i < number; i++) {
            string += letterSet[whichRomanEquivalent];
        }
        return string;
    }

}

function translateMillarEnAdelante(number) {
    let translatedMillar = "";
    for (let i = 0; i < number; i++) {
        translatedMillar += "M";
    }
    return translatedMillar;
}


console.log(convertToRoman(19999));