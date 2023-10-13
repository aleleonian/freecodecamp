function addTogether(...args) {

  if (!checkArgs(args)) return undefined;

  if (args.length == 1) {
    return function (secondArg) {
      if (typeof secondArg != "number") return undefined;
      return args[0] + secondArg;
    }
  }
  else {
    return args[0] + args[1];
  }

  function checkArgs(args) {
    for (const argument of args) {
      if (typeof argument != "number") {
        return false;
      }
    }
    return true;
  }
}

console.log(addTogether(2)([3]));