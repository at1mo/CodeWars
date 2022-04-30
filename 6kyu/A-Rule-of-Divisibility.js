let result = 0;
function thirt(n) {
  const sequence = [1, 10, 9, 12, 3, 4];

  const nn = String(n)
    .split("")
    .reverse()
    .map((item) => Number(item));

  const sum = nn
    .map((item, index) => {
      return index < sequence.length
        ? item * sequence[index]
        : item * sequence[index - sequence.length];
    })
    .reduce((curr, prev) => curr + prev);

  if (result == sum) {
    return sum;
  } else {
    result = sum;
    return thirt(sum);
  }
}

console.log(thirt(8529));

// Test.assertEquals(thirt(8529), 79)
// Test.assertEquals(thirt(85299258), 31)
// Test.assertEquals(thirt(5634), 57)
// Test.assertEquals(thirt(1111111111), 71)
// Test.assertEquals(thirt(987654321), 30)
