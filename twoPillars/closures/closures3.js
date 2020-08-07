const array = [1, 2, 3, 4];
// Var is NOT block scoped, and therefore cannot be accessed by closure here from outside of its local scope
for (var i = 0; i < array.length; i++) {
  console.log("this is i", i); // has access to i
  setTimeout(function () {
    console.log("I am at index", i); // by the time setTimeout returns, global i is already set to 4
  }, 3000);
}

// let is block scoped, meaning each iteration creates a new scope for each i value
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index", array[i]);
  }, 3000);
}

// the immediately invoked function expression creates a new function scope that references i
// and passes each iteration in as an argument
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log("I am at index", array[closureI]);
    }, 3000);
  })(i);
}
