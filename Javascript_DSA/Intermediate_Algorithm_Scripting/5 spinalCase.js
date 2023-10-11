function spinalCase(str) {
  return str.split(/(?=[A-Z])|\W+|_/g).join("-").toLowerCase();
}

console.log(spinalCase('AllTheSmallThings'));