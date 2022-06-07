function squareSum(numbers) {
  return numbers.reduce((prev, cur) => cur ** 2 + prev, 0);
}

console.log(squareSum([16, -16, -12, -2, -8, 20, 14, -2, 19, 13]));
