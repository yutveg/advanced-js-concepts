// function currying
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));

// Context vs Scope
// scope is more related to the variable access of a function
// when it is invoked

// context is more object, "this" related
