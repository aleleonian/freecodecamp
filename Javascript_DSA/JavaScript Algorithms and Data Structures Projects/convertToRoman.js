function convertToRoman(num) {

    if (Number.isNaN(num)) {
        return false;
    }
    const unidad = getUnidad(num);

    const decena = getDecena(num);

    const centena = getCentena(num);

    const millar = getMillar(num);

    console.log("unidad->" + unidad);
    console.log("decena->" + decena);
    console.log("centena->" + centena);
    console.log("millar->" + millar);

    const translatedUnidad = translateUnidad(unidad);

    const translatedDecena = translateDecena(decena);

    const translatedCentena = translateCentena(centena);

    const translatedMillar = translateMillar(millar);

    console.log("translatedUnidad->" + translatedUnidad);
    console.log("translatedDecena->" + translatedDecena);
    console.log("translatedDCentena->" + translatedCentena);
    console.log("translatedMillar->" + translatedMillar);

    const translatedNumber = `${translatedMillar}${translatedCentena}${translatedDecena}${translatedUnidad}`;

    return translatedNumber;
    // (12350 % 10000 - 12350 % 1000 ) / 1000

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


function translateDecena(number) {
    let translatedNumber = "";
    switch (number) {
        case 0:
            break;
        case 1:
            translatedNumber = "X";
            break;
        case 2:
            translatedNumber = "XX";
            break;
        case 3:
            translatedNumber = "XXX";
            break;
        case 4:
            translatedNumber = "XL";
            break;
        case 5:
            translatedNumber = "L";
            break;
        case 6:
            translatedNumber = "LX";
            break;
        case 7:
            translatedNumber = "LXX";
            break;
        case 8:
            translatedNumber = "LXXX";
            break;
        case 9:
            translatedNumber = "XC";
            break;

    }
    return translatedNumber;
}
function translateUnidad(number) {
    let translatedNumber = "";
    switch (number) {
        case 0:
            break;
        case 1:
            translatedNumber = "I";
            break;
        case 2:
            translatedNumber = "II";
            break;
        case 3:
            translatedNumber = "III";
            break;
        case 4:
            translatedNumber = "IV";
            break;
        case 5:
            translatedNumber = "V";
            break;
        case 6:
            translatedNumber = "VI";
            break;
        case 7:
            translatedNumber = "VII";
            break;
        case 8:
            translatedNumber = "VIII";
            break;
        case 9:
            translatedNumber = "IX";
            break;

    }
    return translatedNumber;
}
function translateCentena(number) {
    let romanCentenas = {
        0: "",
        1: "C",
        2: "CC",
        3: "CCC",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM"
    }
    return romanCentenas[number];
}
function translateMillar(number) {
    let translatedMillar = "";
    for (let i = 0; i < number; i++) {
        translatedMillar += "M";
    }
    return translatedMillar;
}

// millar = (numero % 10000 - numero % 1000 ) / 1000
// centenas = (numero % 1000 - numero % 100) / 100;
// decenas = (numero % 100 - numero % 10) / 10;
// unidades = numero % 10;

convertToRoman(2222);