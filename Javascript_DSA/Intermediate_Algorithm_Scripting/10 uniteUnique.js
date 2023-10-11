function uniteUnique(arr) {

    let uniqueItems = [];

    for (let i = 0; i < arguments.length; i++) {
        const currentSubArray = arguments[i];
        currentSubArray.forEach(element => {
            if (uniqueItems.indexOf(element) == -1) {
                uniqueItems.push(element);
            }
        });
    }
    return uniqueItems;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


/*
ChatGPT's version:

function uniteUnique(...arrays) {
    const uniqueItems = new Set();

    arrays.forEach(arr => {
        arr.forEach(element => {
            uniqueItems.add(element);
        });
    });

    return [...uniqueItems];
}

In this version, we use the spread operator ... to gather all input arrays into a single array 
called arrays. We create a Set called uniqueItems to automatically handle uniqueness. 
Then, we iterate through all the arrays and elements, adding each element to the uniqueItems set. 
Finally, we convert the set back to an array using the spread operator ... and return it. 
This approach simplifies the code and makes it more efficient for finding unique items.

Takeaways:

    1) In this version, we use the spread operator ... to gather all input arrays into a single array 
called arrays. I did not know you could do that. Apparently i need to study the ... operator again.
    2) When adding to a Set you don't need to ask if Set.has that item. Just add it. If it's a duplicate
    it won't be added.
    3) Did not know/remember you could turn a Set into an Array by doing [...Set]

*/