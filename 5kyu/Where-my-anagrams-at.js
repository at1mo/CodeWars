function anagrams(word, words) {
  return words.filter(item => {
     if (item.split('').sort().join('') === word.split('').sort().join('')) {
        return item
     }
  })
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));