const countDeafRats = function (town) {
  town = Array.from(town);
  const newTown = [];
  for (let i = 0; i < town.length; i++) {
    if (town[i] === "~") {
      ++i;
      newTown.push("L");
    } else if (town[i] === "O") {
      ++i;
      newTown.push("R");
    } else if (town[i] === "P") {
      newTown.push("P");
    }
  }

  let counter = 0;
  newTown.map((item, index) => {
    if (index < newTown.indexOf("P")) {
      counter = item === "R" ? counter + 1 : counter;
    } else if (index > newTown.indexOf("P")) {
      counter = item === "L" ? counter + 1 : counter;
    }
  });
  return counter;
};

console.log(countDeafRats("P O~ O~ ~O O~")); // 1
