function diffArray(arr1, arr2) {
    let newArr = [];

    newArr = newArr.concat(arr1.filter(item => {
        if (arr2.indexOf(item) == -1) return item;
    }));

    newArr = newArr.concat(arr2.filter(item => {
        if (arr1.indexOf(item) == -1) return item;
    }));

    console.log(newArr);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);