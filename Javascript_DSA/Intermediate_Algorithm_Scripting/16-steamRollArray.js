
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