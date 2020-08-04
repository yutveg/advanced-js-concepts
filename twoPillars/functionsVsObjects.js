const obj = {
  two() {
    return 2;
  },
};
obj.two();

const four = new Function("num", "return num");
console.log(four(3));

four.someProperty = "ahhh";

// creates a special object
// const specialObj = {
//     someProperty: 'ahhh', // properties onto the function
//     name: 'four', // an optional attribute
//     (): return num
// }

// Functions are first class citizens in JS
// - can be assigned to variables, and properties of objs
var stuff = function () {};
// - can pass functions as arguments
function a(fn) {
  fn();
}

a(function () {
  console.log("hi there");
});

// - can return functions as values

function b() {
  return function someFunction() {
    console.log("hi");
  };
}

console.log(b()());
