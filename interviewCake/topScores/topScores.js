// Takes in unsorted array of scores
// the highest possible score
// Returns sorted array of scores

// Time complexity- less than O(n lg n)
function sortScores(unsortedArr, highestPossibleScore) {
  // initialize our array
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // incrementing indexes
  unsortedArr.forEach((score) => scoreCounts[score]++);

  const finalArray = [];

  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
