function vowelIndices(word){
  const arrayVowels = ["a", "e", "i", "o", "u", "y"];
  const result = [];

  for(let i = 0; i < word.length; i++) {
    for(let j = 0; j < arrayVowels.length; j++) {
      if(word[i].toLowerCase() === arrayVowels[j]) {
        result.push(i+1)
      }
    }
  }

  return result;
}