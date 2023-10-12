
function steamrollArray(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement;

        currentElement = arr[i];

        if (typeof currentElement == "object") {
            if (Array.isArray(currentElement)) {
                currentElement = steamrollArray(currentElement);
            }
            // else {
            //     currentElement = JSON.stringify(currentElement);
            // }
        }
        if (Array.isArray(currentElement)) newArray = newArray.concat(currentElement);
        else {
            newArray.push(currentElement);
        }

    }

    return newArray;
}


// console.log(steamrollArray([1, [2]]));

console.log(steamrollArray([1, {}, [3, [[4]]]]));


// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].


[1,
    [2],
    [3,
        [
            [4]
        ]
    ]
]