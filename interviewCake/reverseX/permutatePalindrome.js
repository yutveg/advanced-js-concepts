function permutatePalindrome(string) {
  let allowance = string.length % 2 === 0 ? false : true;

  // Storing characters with their count
  let characterCount = {};
  // push all characters into characterCount with respective frequency
  for (let i = 0; i < string.length; i++) {
    characterCount[string[i]]
      ? (characterCount[string[i]] += 1)
      : (characterCount[string[i]] = 1);
  }
  console.log(characterCount);
  let odd = 0;
  for (let i = 0; i < string.length; i++) {
    // found an odd number iteration
    if (characterCount[string[i]] % 2 !== 0) {
      if (allowance && odd === 0) {
        odd += 1;
      } else {
        return false;
      }
    }
  }

  return true;
}

function hasPalindromePermutation(theString) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

// Initial check length of string
// Loop through characters and keep track of odd count
// If string length is odd we have one odd possibility
// If string length is not odd all letters must be even count

console.log(permutatePalindrome("ccrraa")); // true
console.log(permutatePalindrome("crraa")); // true
console.log(permutatePalindrome("ccra")); // false
console.log(permutatePalindrome("ccccrrrraaddvs")); // false
