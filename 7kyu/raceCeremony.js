function racePodium(blocks) {
  if (blocks == 7) return [2, 4, 1];
  let second = Math.ceil(blocks / 3);
  return [second, second + 1, blocks - second * 2 - 1];
}

// console.log(racePodium(1111));

// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]
// 100000 -> [33334, 33335, 33331]
