function direction(facing, turn) {
  const compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const nextPosition = (compass.indexOf(facing) + turn / 45) % compass.length;
  return compass[nextPosition];
}

console.log(direction("S", -495)); // 'NE'
