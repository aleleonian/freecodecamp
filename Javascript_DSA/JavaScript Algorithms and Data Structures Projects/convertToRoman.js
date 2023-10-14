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
    let translatedNumber = "";
    let multiplier = 0;
    String(num).split("").reverse().forEach((numChar, index) => {
        switch (index) {
            case 0:
                translatedNumber += translateNumber(romanUnidades, numChar) + "-";
                break;
            case 1:
                translatedNumber += translateNumber(romanDecenas, numChar) + "-";
                break;
            case 2:
                translatedNumber += translateNumber(romanCentenas, numChar) + "-";
                break;
            case 3:
                translatedNumber += translateMillarEnAdelante(numChar) + "-";
                break;
            default:
                if (multiplier == 0) multiplier = 10;
                else {
                    multiplier *= 10;
                }
                numChar = String(Number(numChar) * multiplier);
                translatedNumber += translateMillarEnAdelante(numChar) + "-";
                break;
        }

    }
    );

    return translatedNumber.split("-").reverse().join("");

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


console.log(convertToRoman(399999));
