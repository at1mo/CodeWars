function betterThanAverage(classPoints, yourPoints) {
  let avgPoint = classPoints.reduce((prevPoint, point) => prevPoint + point, 0) / classPoints.length;
  return yourPoints > avgPoint;
}

console.log(betterThanAverage([2, 3], 5)); // 1
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // 1