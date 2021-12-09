function isIsogram(str) {
  let str1 = str.toLowerCase().split("");
  let result = str1.filter((item, index) => {
    return str1.indexOf(item) !== index;
  });
  return !result[0];
}

console.log(isIsogram("Dermatoglyphics")); // true
