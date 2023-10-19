function generatePermutations(inputStr) {
    if (inputStr.length <= 1) {
        return [inputStr];
    }

    //result inicialmente contienen la primer letra de mi string
    // 'a'
    let result = [inputStr[0]];

    //itero el string 'le'
    //por cada letra que no es la primera, voy a permutar la primera
    //que a su vez con cada iteración se va a ir transformando en un string
    //osea va a dejar de ser letra nomás
    for (let i = 1; i < inputStr.length; i++) {
        const char = inputStr[i];
        const newResult = [];

        //voy a iterar el array donde se van guardando las permutaciones
        for (let j = 0; j < result.length; j++) {
            const str = result[j];
            //por cada string en mi array de de permutaciones
            //voy a agregar char en las distintas posiciones
            for (let k = 0; k <= str.length; k++) {
                const permutation = str.slice(0, k) + char + str.slice(k);
                newResult.push(permutation);
            }
        }

        result = newResult;
    }

    return result;
}

// Example usage:
const inputStr = "ale";
const permutations = generatePermutations(inputStr);
console.log(permutations);
