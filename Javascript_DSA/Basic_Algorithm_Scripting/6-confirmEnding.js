function confirmEnding(str, target) {
  let allGood = true;
  for (let i = target.length - 1; i >= 0; i--) {
    if (str[str.length - 1 - i] === target[target.length - 1 - i]) continue;
    else {
      allGood = false;
    }
  }
  return allGood;
}

confirmEnding("Bastian", "an");

/*

ChatGPT's version is exquisite!

function confirmEnding(str, target) {
    const strEnding = str.slice(-target.length);
    return strEnding === target;
}

In the code, I use -target.length as an argument for slice() to ensure that we're extracting the last target.length characters from the end of the string str.

Takeaways:

By passing slice() a negative number, we start counting characters from the end of the string.
*/