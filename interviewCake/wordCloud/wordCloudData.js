// Function takes in a string

// Maps word frequency in a hash table

function wordFrequency(string) {
  const wordMap = new Map();

  let wordStart = 0;
  // looping through word array
  for (let i = 0; i <= string.length; i++) {
    // if we hit an empty space or end of string
    if (string[i] === " " || i === string.length) {
      // sanitize word
      let word = string
        .slice(wordStart, i)
        .replace(/[.,;:]/, "")
        .toLowerCase();

      // if it exists in our map, we increment, else initialize to 1
      wordMap[word] ? (wordMap[word] += 1) : (wordMap[word] = 1);

      // set our new indexes
      wordStart = i + 1;
    }
  }

  return wordMap;
}

module.exports = {
  wordFrequency: wordFrequency,
};

// remove all punctuation from string with replace(regex)
// lowercase all chars
// split white space into an array of words
// iterate over array and insert into hash table
