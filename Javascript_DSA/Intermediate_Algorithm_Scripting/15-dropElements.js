function dropElements(arr, func) {

    let conditionIsMet = false;

    return arr.filter(item => {
        if (!conditionIsMet) {
            if (func(item)) {
                conditionIsMet = true;
            }
        }
        return conditionIsMet;
    })

}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));

/*

The mind-blowing version of ChatGPT:

function dropElements(arr, func) {
    const index = arr.findIndex(func);
    return index === -1 ? [] : arr.slice(index);
}

We use arr.findIndex(func) to find the index of the first element that satisfies 

the condition provided by the func function.

If the index is -1, it means no element in the array meets the condition, 
so we return an empty array [].

If an index is found, we use arr.slice(index) to create a new array 
starting from that index, effectively dropping the elements that do not meet the condition.

This version of the function achieves the same result as the original code but in a more concise and idiomatic way.

ChatGPT's function does not iterate on each item but finds the first item that satisfies the callback's

need 🤯

*/