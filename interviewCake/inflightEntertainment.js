function moviePicker(flightLength, movieLengths) {
  // Initializing our lookupTable
  const lookupTable = new Set();

  // Looping through movies array
  for (let i = 0; i < movieLengths.length; i++) {
    // if set contains summation partner, true
    // else, push value onto set
    if (lookupTable.has(flightLength - movieLengths[i])) {
      return true;
    } else lookupTable.add(movieLengths[i]);
  }

  return false;
}

const flightLength = 120;
const movieLengths1 = [60, 70, 40, 20];
const movieLengths2 = [60, 70, 60, 20];
const movieLengths3 = [50, 70, 40, 20];

console.log(moviePicker(flightLength, movieLengths1));
console.log(moviePicker(flightLength, movieLengths2));
console.log(moviePicker(flightLength, movieLengths3));
