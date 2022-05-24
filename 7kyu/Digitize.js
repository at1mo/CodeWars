function digitize(n) {
  const array = typeof(n) === 'number' ? Array.from(String(n)) : n
  return array.map(Number)
}

console.log(digitize([1, '2']));