function smallestCommons(arr) {
    const [first, second] = arr.sort((a, b) => a - b);
    let smallestCommon;
    // An faster approach is to check all multiples of 4 to see if they are also multiples of 3
    //, by checking the remainder when we divide the multiple of 4 by 3.

    for (let i = 1; ; i++) {
        smallestCommon = second * i;

        let foundIt = false;

        if (smallestCommon % first == 0 && smallestCommon % second == 0) {
            for (let x = first + 1; x < second; x++) {
                if (smallestCommon % x == 0) {
                    foundIt = true;
                }
                else {
                    foundIt = false;
                    break;
                }
            }
        }
        if (foundIt) {
            console.log("Found them!->smallestCommon =" + smallestCommon);
            smallestCommon = smallestCommon;
            break;
        }
    }

    return smallestCommon;
}

smallestCommons([1, 5]);