function getLengthOfMissingArray(arrayOfArrays) {
  let arrays = [];
  arrayOfArrays.map((array) => {
    arrays.push(array.length);
  });
  const uniq = new Set(arrays);
  const array = Array.from(uniq).sort((a, b) => a - b);
  if (typeof(arrays[0]) === "undefined") return 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1] - 1) {
      return array[i + 1] - 1;
    }
  }
}

// console.log(
//   getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
// ); // 3
// console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2
// console.log(
//   getLengthOfMissingArray([
//     ["a", "a", "a"],
//     ["a", "a"],
//     ["a", "a", "a", "a"],
//     ["a"],
//     ["a", "a", "a", "a", "a", "a"],
//   ])
// ); //  5
