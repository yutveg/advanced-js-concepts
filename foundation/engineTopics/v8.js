// Call stack + memory heap
const number = 510;
// allocate memory for number const
// point number in memory heap at value 510

const human = {
  // allocate memory for an object
  first: "Adam", // and its values
  last: "Neagoie",
};
// human points at memory address in heap for these values
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  // allocated to memory
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}
// when we call calculate, points to memory address for function

console.log(calculate());
