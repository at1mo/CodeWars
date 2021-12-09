function deleteNth(arr, n) {
  const uniqArr = arr.filter(function (item, position, array) {
    return array.lastIndexOf(item) === position; // вернём уникальные элементы
  });
  return uniqArr;
}

console.log(deleteNth([20, 37, 20, 21], 1)); 
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)
);