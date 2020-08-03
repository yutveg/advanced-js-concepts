// function scope vs block scope

// let or const are block scoped!
// block scope = if statements, for loops, etc
if (5 > 4) {
  var secret = "1234";
}

function a() {
  // only accessible in function
  var secret = "1245";
}

secret;

function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

loop();

/*
||  IIFE  ||
*/
// immediately invoked function expression
(function () {
  var a = 1;
})();
// benefit = no global properties created
// scopes inside the IIFE
var script1 = (function () {
  function a() {
    return "111";
  }
  return {
    a: a,
  };
})();
// creates a global namespace "script1" by which you can access
// a
script1.a();

/*
||  this keyword  ||
*/
// points at the object which the function is a property of
// gives methods access to their object
// is NOT lexically scoped unless in arrow function
// this = window by default
function a() {
  // this points at global execution context
  console.log(this);
}

const obj = {
  name: "Billy",
  sing() {
    // this points at object
    console.log("a", this);
    // regular functions are dynamically bound
    // arrow functions are LEXICALLY bound
    // this = parent object
    var anotherFunc = function () {
      // this will be window
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};

obj.sing();

// call(); method on function objects to invoke
// apply(); method on function objects to invoke, takes parameters as array after
// specifying context
// bind(); RETURNS a function, creating a context + takes parameters

const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

wizard.heal.call(archer, 50, 100); // calling the heal method, using "archer" as the 'this'
console.log(archer);
wizard.heal.apply(archer, [20, 30]);
console.log(archer);
