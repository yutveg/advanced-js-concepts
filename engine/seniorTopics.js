/* 
||  Execution Context  ||
*/
// Engine creates a global() execution context initially
// Comes with Global Object, and this keyword
// Global variables are added onto the global object
function printName() {
  return "Andrew Neagoie";
}

function findName() {
  // creates NEW execution context, pushes to stack
  return printName();
}

function sayMyName() {
  // creates NEW execution context, pushes to stack
  return findName();
}
// creates execution context when engine sees "()"
// adds context onto the stack
sayMyName();

// global() execution context popped off after program done

/*
||  Lexical Scope/Environment  ||
*/
// relating to the location of program instructions are defined in a file
// dynamic scope relates to location when invoked/called

/*
|| Hoisting ||
*/
// first pass, allocates memory for vars and functions before running
sing();
console.log(teddy);
// let and const are not hoisted
// var partially hoisted
const teddy = "bear";
// function declarations fully hoisted, last declaration
// takes priority
function sing() {
  console.log("ohhhhh lalala");
}
// function expressions partially / not hoisted
var sing2 = function () {
  console.log("uhhh lalala");
};

// var favouriteFood = undefined
// var foodThoughts = undefined
// favouriteFood = grapes
// foodThoughts = function()
// Inside new execution context of foodThoughts()
// creation, hoists favouriteFood when sees "var"
// favouriteFood = undefined
// on execution, favouriteFood = undefined, then set to
// "sushi"
var favouriteFood = "grapes";
var foodThoughts = function () {
  console.log("Original", favouriteFood);
  var favouriteFood = "sushi";
  console.log("New", favouriteFood);
};
