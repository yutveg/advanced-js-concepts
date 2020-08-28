function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error(
      "Getting the product of numbers at other indices requires at least 2 numbers"
    );
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
    console.log("building left to right", productsOfAllIntsExceptAtIndex);
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
    console.log("building right to left", productsOfAllIntsExceptAtIndex);
  }

  return productsOfAllIntsExceptAtIndex;
}

// takes in an array of numbers

// returns an array of products, each index = to the products of all integers not on that index in numsArray

const arrayOfNums = [1, 3, 5, 9];

getProductsOfAllIntsExceptAtIndex(arrayOfNums);
