function areBracketsValid(string) {
  // keep track of what we want to close and a handy most recent reference
  let currentOpenStack = [];

  // create a lookup table with open chars as keys, and close chars as values
  // this will let us check if a closing character matches a currentOpen later
  const closingPair = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  const closedChars = {
    "]": 1,
    "}": 1,
    ")": 1,
  };

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    // if we are looking at an open char
    if (closingPair[currentChar]) {
      currentOpenStack.push(currentChar);
    }

    // if we are looking at a closed character
    else if (closedChars[currentChar]) {
      console.log(
        "most recent open",
        currentOpenStack[currentOpenStack.length - 1],
        "and currentChar",
        currentChar
      );
      if (
        currentChar ===
        closingPair[currentOpenStack[currentOpenStack.length - 1]]
      ) {
        // pop that char off the stack and continue
        currentOpenStack.pop();
      }
      // if we find a closing character and it doesn't match the previous opening
      // we have interloping brackets ergo: return false
      else break;
    }
  }
  console.log(currentOpenStack);
  return currentOpenStack.length === 0 ? true : false;
}

console.log(areBracketsValid("{ [ }"));
