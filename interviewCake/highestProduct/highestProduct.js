// given an array of integers, find highest product of ints

// will always contain at least three ints

function highestProduct(numbersToMultiply) {
  if (numbersToMultiply.length === 3) {
    let nums = numbersToMultiply;
    return nums[0] * nums[1] * nums[2];
  }

  numbersToMultiply.sort((a, b) => a - b);

  // pick off the front and back of the array

  // insert first two indexes if they are negative

  // insert last three indexes

  let potentialMaxes = numbersToMultiply.slice(numbersToMultiply.length - 3);

  console.log(potentialMaxes);

  // if we have two negative numbers
  if (numbersToMultiply[0] < 0 && numbersToMultiply[1] < 0) {
    // if our negative numbers are greater abs values than first two in potentialMaxes, swap
    if (
      potentialMaxes[1] < Math.abs(numbersToMultiply[0]) &&
      potentialMaxes[0] < Math.abs(numbersToMultiply[1])
    ) {
      // swap values
      [potentialMaxes[0], potentialMaxes[1]] = [
        Math.abs(numbersToMultiply[1]),
        Math.abs(numbersToMultiply[0]),
      ];
    }
  }

  return potentialMaxes[0] * potentialMaxes[1] * potentialMaxes[2];
}

const arrayOfInts = [-10, 0, -5, 5, 3, 10, 20, -20, 1, 3, 2];

console.log(highestProduct(arrayOfInts));
