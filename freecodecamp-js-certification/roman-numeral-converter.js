let romanMatrix = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  
  function convertToRoman(num) {
    if (num === 0) {
      return "";
    }
  
    for (let i = 0; i < romanMatrix.length; i++) {
      if (num >= romanMatrix[i][0]) {
        return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
      }
    }
  
    return num;
  }
  
  console.log(convertToRoman(36));
  console.log(convertToRoman(3999));
  console.log(convertToRoman(400));
  