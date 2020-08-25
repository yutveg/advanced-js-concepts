// Plan

// Loop through the served orders array

// On each index, we check if it is either take out or dine in

// and we hold two pointers to watch for those values

function orderChecker(takeOut, dineIn, served) {
  // initializing our pointers to keep track of our two order arrays
  let takeOutIndex = 0;
  let dineInIndex = 0;

  for (let i = 0; i < served.length; i++) {
    console.log("takeOut value", takeOut[takeOutIndex]);
    console.log("dineIn value", dineIn[dineInIndex]);
    // check each value as compared to unique numbers in order arrays
    if (served[i] === takeOut[takeOutIndex]) {
      // moving up to next order
      takeOutIndex += 1;
    } else if (served[i] === dineIn[dineInIndex]) {
      // moving up to next order
      dineInIndex += 1;
    } else {
      return false;
    }
  }
  return true;
}

const takeOut = [17, 8, 24];
const dineIn = [12, 19, 2];
const served = [17, 8, 12, 19, 24, 2];

console.log(orderChecker(takeOut, dineIn, served));
