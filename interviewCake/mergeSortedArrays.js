// Take in two pre-sorted arrays

// Return one merged, sorted array

function merge(arr1, arr2) {
  // initializing and pre-allocating master array
  const master = new Array(arr1.length + arr2.length);
  // Initialized pointer/index variables to keep track of position in our arrays
  let pointer1 = 0;
  let pointer2 = 0;
  let masterIndex = 0;

  // Loop while both indexes are within array range
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    // arr1 item is smaller then we insert that into master and iterate pointers
    if (arr1[pointer1] <= arr2[pointer2]) {
      master[masterIndex] = arr1[pointer1];
      pointer1 += 1;
      masterIndex += 1;
    }
    // arr2 item is smaller then we insert that into master and iterate pointers
    else {
      master[masterIndex] = arr2[pointer2];
      pointer2 += 1;
      masterIndex += 1;
    }
  }
  console.log("broke out of loop", master);

  while (pointer1 < arr1.length) {
    // merge remaining items in arr1 into master
    master[masterIndex] = arr1[pointer1];
    pointer1 += 1;
    masterIndex += 1;
  }

  while (pointer2 < arr2.length) {
    // merge remaining items in arr2 into master
    master[masterIndex] = arr2[pointer2];
    pointer2 += 1;
    masterIndex += 1;
  }

  return master;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(merge(myArray, alicesArray));

const doubleMyArray = myArray.map(function (item) {
  return item + 2;
});
console.log(myArray);
console.log(doubleMyArray);
