function convertToRoman(num) {
    if (isNaN(num) || num < 1 || num > 3999) {
      return "Invalid input. Please enter a number between 1 and 3999.";
    }
  
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = "";
  
    for (const numeral in romanNumerals) {
      while (num >= romanNumerals[numeral]) {
        result += numeral;
        num -= romanNumerals[numeral];
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(convertToRoman(354)); // Output: "CCCLIV"
  