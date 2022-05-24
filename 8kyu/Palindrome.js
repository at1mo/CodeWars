function isPalindrome(line) {
  console.log(Array.from(String(line)), Array.from(String(line)).reverse())
  return JSON.stringify(Array.from(String(line))) === JSON.stringify(Array.from(String(line)).reverse());
}

console.log(isPalindrome(1221));