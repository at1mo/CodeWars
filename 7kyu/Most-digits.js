function findLongest(array){
  return array.find(item => {
    return String(item).length === Math.max(...array.map(item => String(item).length));
  })
}

console.log(findLongest([1, 100, 200])) // 100