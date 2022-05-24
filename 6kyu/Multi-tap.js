function presses(phrase) {
  let counter = 0;
  const counterChar = (char, defaultChar = "A", modal = 3) => {
    return (char.charCodeAt() - defaultChar.charCodeAt() + 1) % modal
      ? (char.charCodeAt() - defaultChar.charCodeAt() + 1) % modal
      : modal;
  };
  const spaceCode = " ".charCodeAt();
  const arrayCodes = ["P", "T", "W"];
  const arrayCodesNumber = [2, 1, 4, 4, 4, 4, 4, 5, 4, 5]

  phrase
    .toUpperCase()
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt();
      if (charCode !== spaceCode && charCode > 57) {
        if (charCode >= 80 && 84 > charCode) {
          counter += counterChar(char, arrayCodes[0], 4);
        } else if (charCode >= 84 && 87 > charCode) {
          counter += counterChar(char, arrayCodes[1], 3);
        } else if (charCode >= 87 && 91 > charCode) {
          counter += counterChar(char, arrayCodes[2], 4);
        } else {
          counter += counterChar(char);
        }
      } else {
        if (charCode === spaceCode) {
          counter++;
        } else {
          counter+=arrayCodesNumber[char];
        }

      }
    });
  return counter
}

console.log(presses("asdasdas24234u65u56u d"));
