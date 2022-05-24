function sameCase(a, b) {
  const reg = /^[a-zA-Z]/;
  if (!reg.exec(a) || !reg.exec(b)) {
    return -1;
  } else if ((a == a.toUpperCase()) === (b == b.toUpperCase())) {
    return 1;
  } else {
    return 0;
  }
}

console.log("1", sameCase("C", "B")); //, 1
console.log("1", sameCase("b", "a")); //, 1
console.log("1", sameCase("d", "d")); //, 1
console.log("0", sameCase("A", "s")); //, 0
console.log("0", sameCase("c", "B")); //, 0
console.log("0", sameCase("b", "Z")); //, 0
console.log("-1", sameCase("\t", "Z")); //, -1
console.log("-1", sameCase("H", ":")); //, -1
