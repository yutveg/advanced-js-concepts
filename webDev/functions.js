const first = () => {
  const greet = "hi";
  const second = () => {
    return greet;
  };
  return second;
};

const newFunc = first();
console.log(newFunc());

// currying
const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
// process of turning a single, multi parameter function
// into a series of functions that take one parameter each
const multiplyByThree = curriedMultiply(3);
// an example use case:
console.log(multiplyByThree(20));
