// stockPrices array => indexes are time (minutes) after opening time
// values are the price of stock

// returns the best profit possible with the given data set

// Must do:

// Ensure that we sell AFTER we buy

// We want keep track of the biggest difference between some prevStock and a laterStock

function getBestProfit(array) {
  if (array.length <= 1) {
    throw new Error("Entered array does not contain sufficient data.");
  }
  // variable for bestProfit so far
  // initialize it with array[0] - array[1]

  // two vars for high and low as we iterate thru
  // to capture indexes of highest and lowest values
  let bestProfit = array[1] - array[0];

  let lowestPrice = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentPrice = array[i];

    // potential profit for current loop
    const potentialProfit = currentPrice - lowestPrice;

    // updating best profit to max possible profit
    bestProfit = Math.max(bestProfit, potentialProfit);

    // updating our low value as we go
    lowestPrice = Math.min(lowestPrice, currentPrice);
  }

  return bestProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];
const stockPrices1 = [10, 5, 2, -3, -6];
console.log(getBestProfit(stockPrices));
console.log(getBestProfit(stockPrices1));
