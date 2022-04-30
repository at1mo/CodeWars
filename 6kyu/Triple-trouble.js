function tripledouble(num1, num2) {
  array1 = String(num1)
    .split("")
    .map((i) => Number(i));
  array2 = String(num2)
    .split("")
    .map((i) => Number(i));
  const freqArray = [];
  let counter = 0;
  for (let i = 0; i < 10; i++) {
    if (
      array1.filter((item) => {
        if (item === i) {
          counter++;
          if (counter === 3) return i;
        } else {
          counter = 0;
        }
      })
    ) {
      freqArray.push(i);
    }
  }
  for (let j = 0; j < freqArray.length; j++) {
    if (array2.filter((item) => item === freqArray[j]).length === 2) {
      return true;
    }
  }
  return false;
}

console.log(tripledouble(451999277, 41177722899)); // 1
console.log(tripledouble(1222345, 12345)); // 0
console.log(tripledouble(12345, 12345)); // 0
console.log(tripledouble(666789, 12345667)); // 0
console.log(tripledouble(10560002, 100)); // 0
console.log(tripledouble(1112, 122)); // 0
