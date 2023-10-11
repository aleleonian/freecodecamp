function whatIsInAName(collection, source) {
    return collection.filter(item => {
        return Object.entries(source).every(pair => {
            const key = pair[0];
            const value = pair[1];
            if (item[key] && item[key] == value) return true;
        })
    })

}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//chatGPT's version:
// function whatIsInAName(collection, source) {
//     return collection.filter(item => {
//       return Object.keys(source).every(key => item[key] === source[key]);
//     });
//   }
  