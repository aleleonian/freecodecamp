function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  let newString = ""
  for (let i = 0; i < num; i++) {
    newString += str.slice();
  }
  return newString;
}

console.log(repeatStringNumTimes("*", 3));