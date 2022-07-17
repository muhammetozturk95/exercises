function rot13(str) {
  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 77) {
      str[i] = String.fromCharCode(str[i].charCodeAt() + 13);
    } else if (str[i].charCodeAt() >= 78 && str[i].charCodeAt() <= 90) {
      str[i] = String.fromCharCode(str[i].charCodeAt() - 13);
    }
  }

  str = str.join("");
  return str;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
