// Write a function that reverses a array-string in place

// Iterate through array

// On each character, find index that it will be 0, 1, 2, 3 length = 4

// Swap with that index

// Stop once halfway through string (length // 2)

function reverseChars(array) {
  const length = array.length;

  // Iterating through first half of array of characters
  for (let i = 0; i < length / 2; i++) {
    // On each index, swapping with its inverse index
    [array[i], array[length - (i + 1)]] = [array[length - (i + 1)], array[i]];
  }

  // Return mutated array
  return array;
}
const arrayOfCharacters = ["k", "o", "d", "i", "n"];
console.log(reverseChars(arrayOfCharacters));
