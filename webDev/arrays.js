const array = [1, 4, 62, 9];

const double = [];
array.forEach((num) => {
  double.push(num * 2);
});

console.log(double);

// reduce example

const reduceArray = array.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);

console.log(reduceArray);
