// given an array of integers, find highest product of ints

const { max } = require("lodash");

// will always contain at least three ints

function highestProduct(numbersToMultiply) {
  if (numbersToMultiply.length === 3) {
    let nums = numbersToMultiply;
    return nums[0] * nums[1] * nums[2];
  }

  // creating an array to hold our values which will get
  // turned into potential maxes later
  let maxArray = numbersToMultiply.slice(0, 3);
  maxArray.sort((a, b) => a - b);

  for (let i = 0; i < numbersToMultiply.length; i++) {
    const currentNumber = numbersToMultiply[i];

    for (let j = 0; i < maxArray.length; i++) {
      if (currentNumber > maxArray[j]) {
      }
    }
  }
}

const arrayOfInts = [-10, -10, 1, 3, 2];

console.log(highestProduct(arrayOfInts));
