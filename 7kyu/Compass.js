function direction(facing, turn) {
  const compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const sum = compass.indexOf(facing) + turn / 45;
  const nextPosition = (sum >= 360 ) % compass.length;

  return compass[nextPosition];
}

console.log(direction("S", -135)); // 'NE'
