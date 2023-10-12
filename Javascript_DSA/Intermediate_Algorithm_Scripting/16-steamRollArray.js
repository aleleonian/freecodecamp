
function steamrollArray(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        let currentElement = arr[i];

        if (Array.isArray(currentElement)) {
            currentElement = steamrollArray(currentElement);
        }

        newArray = newArray.concat(currentElement)
    }

    return newArray;
}


console.log(steamrollArray([1, {}, [3, [[4]]]]));

/*

ChatGPT's version:
function steamrollArray(arr) {
    const flattenedArray = [];

    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i]);
            } else {
                flattenedArray.push(arr[i]);
            }
        }
    }

    flatten(arr);
    return flattenedArray;
}

// Example usage:
const nestedArray = [1, [2], [3, [[4]]]];
const result = steamrollArray(nestedArray);
console.log(result); // [1, 2, 3, 4]

In this implementation:

We define a flattenedArray to store the flattened elements.

We use a recursive flatten function to traverse the nested arrays. 

If an element is an array, we recursively call flatten on that array. 

If it's not an array, we push it to the flattenedArray.

We call the flatten function on the input array to populate the flattenedArray.

This approach achieves the same result as the original function but doesn't rely on Array.prototype.flat(). 

It provides a custom, recursive solution for flattening nested arrays.

Takeaway:
ChatGPT hizo algo parecido a lo que yo hice inicialmente pero sin recurrir a una variable global.
Nomás que resolvió todo dentro de la función principal. En vez de usar una variable global, usó
una "global" dentro de la función y la función recursiva también la definió dentro de la función
principal.
Not bad.
En vez de hacer malabares con los resulados, una vez que ChatGPT llega al "hueso" después de 
bucear en las distintas capas de arrays, "salva" el dato empujándolo a al array definido afuera
de la función recursiva. Nice.
*/