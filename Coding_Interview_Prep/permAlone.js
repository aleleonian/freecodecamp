function permAlone(str) {

  let permutations = [];
  str = str.split("");

  str.forEach(character => {

    let stringWithoutThisChar = [...str];

    stringWithoutThisChar.splice(stringWithoutThisChar.indexOf(character), 1);

    let aPermutation = "";

    for (let i = 0; i < stringWithoutThisChar.length; i++) {
      aPermutation = character + stringWithoutThisChar.join("");
      permutations.push(aPermutation);
      stringWithoutThisChar.unshift(stringWithoutThisChar.pop());
    }

  });

  console.log(permutations);
}

function permutate(array) {
  for (let i = 0; i < array.length; i++) {
    array.unshift(array.pop());
    console.log(array);
  }
}
permAlone('ale');