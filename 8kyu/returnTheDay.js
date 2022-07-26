function whatday(num) {
  const day = "day";
  switch (num) {
    case 1:
      return `Sun${day}`;
    case 2:
      return `Mon${day}`;
    case 3:
      return `Tues${day}`;
    case 4:
      return `Wednes${day}`;
    case 5:
      return `Thurs${day}`;
    case 6:
      return `Fri${day}`;
    case 7:
      return `Satur${day}`;
    default: {
      return "Wrong, please enter a number between 1 and 7";
    }
  }
}

console.log(whatday(2));
