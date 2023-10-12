
function steamrollArray(arr) {

    let newArrayString = "";

    for (let i = 0; i < arr.length; i++) {
        let currentElement;

        currentElement = arr[i];

        if (typeof currentElement == "object") {
            if (Array.isArray(currentElement)) {
                currentElement = steamrollArray(currentElement);
            }
            else {
                currentElement = JSON.stringify(currentElement);
            }
        }

        newArrayString += currentElement;
    }

    return newArrayString.split("")
}


console.log(steamrollArray([1, [2]]));

// console.log(steamrollArray([1, [2], [3, [[4]]]]));


//steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].


[1,
    [2],
    [3,
        [
            [4]
        ]
    ]
]