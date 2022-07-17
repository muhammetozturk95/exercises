function reverse(str) {
  return str.split("").reverse().join("");
}

function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]+/gi, "").toLowerCase();

  if (str === reverse(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("not a palindrome"));
