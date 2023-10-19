
function generatePermutations(string) {

    //result inicialmente contienen la primer letra de mi string
    // 'a'
    let results = [string[0]];

    //itero el string 'le'
    //por cada letra que no es la primera, voy a permutar la primera
    //que a su vez con cada iteración se va a ir transformando en un string
    //osea va a dejar de ser letra nomás
    const restOfString = string.slice(1);

    for (let i = 0; i < restOfString.length; i++) {
        const currentChar = restOfString[i];
        let newResult = [];

        //voy a iterar el array donde se van guardando las permutaciones
        for (let x = 0; x < results.length; x++) {
            let string = results[x];

            //por cada string en mi array de de permutaciones
            //voy a agregar char en las distintas posiciones
            
            for (let y = 0; y <= string.length; y++) {
                // el .slice(0,0) antes del string si luego le pego .slice(0)
                // .slice(0) es una copia del string, remember.    
                // newString.slice(0,0) + "MyCHAR" + mystr.slice(0)
                // mystr.slice(0,1) + "MyCHAR" + mystr.slice(1)
                // la gracia es que podemos ir pegando letras en todo momento de un string
                // si iteramos el length del string y vamos apendeando con la formula
                // myString.slice(0,i) + char + myString.slice(i)

                let newString = string.slice(0, y) + currentChar + string.slice(y);
                newResult.push(newString);

            }
        }
        results = newResult;
    }

    return results;
}


console.log(generatePermutations("ale"));