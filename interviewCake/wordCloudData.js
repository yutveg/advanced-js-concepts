// Function takes in a string

// Maps word frequency in a hash table

function wordFrequency(string) {
  const wordMap = {};

  // removing punctuation from string, lower casing, and splitting into words
  let wordArray = string
    .replace(/[.,;:]/g, "")
    .toLowerCase()
    .split(" ");

  // looping through word array
  for (let i = 0; i < wordArray.length; i++) {
    // if it exists in our map, we increment
    if (wordMap[wordArray[i]]) {
      wordMap[wordArray[i]] += 1;
    }

    // if it does not exist yet, we initialize
    else {
      wordMap[wordArray[i]] = 1;
    }
  }

  return wordMap;
}

// remove all punctuation from string with replace(regex)
// lowercase all chars
// split white space into an array of words
// iterate over array and insert into hash table

console.log(wordFrequency("this. is. a, String; With: punCtuation."));
