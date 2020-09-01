function returnClosingIndex(string, index) {
  let parenthesisOrder = [];

  for (let i = index + 1; i < string.length; i++) {
    if (string[i] === "(") {
      parenthesisOrder.push(string[i]);
    } else if (string[i] === ")") {
      if (parenthesisOrder.length === 0) {
        return i;
      } else {
        parenthesisOrder.pop();
      }
    }
  }
}

console.log(
  returnClosingIndex(
    "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.",
    10
  )
);
