function myReplace(str, before, after) {
    return str.replace(before,
        (
            before.charAt(0) === before.charAt(0).toUpperCase() ?
                after.charAt(0).toUpperCase() + after.slice(1) :
                after.charAt(0).toLowerCase() + after.slice(1)
        )
    );
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));