function mutation(arr) {
    const hayStack = arr[0].toLowerCase();
    const needles = arr[1].toLowerCase().split("");
    return needles.every(letter => hayStack.indexOf(letter) > -1);
}

console.log(mutation(["hello", "Hello"]));