function destroyer(arr) {

    //NOTÓN: a pesar de que a la función se le pasan varios argumentos y son recuperados
    //gracias al objeto arguments, yo puedo tranquilamente hacer referencia al primer argumento
    //a través de la variable arr

    let arrayArgument;

    Object.entries(arguments).forEach((argument, index) => {
        if (index === 0) {
            arrayArgument = argument[1];
            return;
        }
        const currentElement = argument[1];
        let currentElementPosition = arrayArgument.indexOf(currentElement);
        while (currentElementPosition != -1) {
            arrayArgument.splice(currentElementPosition, 1);
            currentElementPosition = arrayArgument.indexOf(currentElement);
        }
    })

    return arrayArgument;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//chatGPT's version:

// function destroyer(arr) {
//     const elementsToRemove = Array.from(arguments).slice(1);
//     return arr.filter(item => !elementsToRemove.includes(item));
//   }

// We use Array.from(arguments) to convert the arguments object into an array, and then we use slice(1) to exclude the first element (the arr array) from the array.

// We use the filter method to create a new array that only includes elements that are not in the elementsToRemove array. This effectively removes the elements from arr that match any of the elements in the other arguments.