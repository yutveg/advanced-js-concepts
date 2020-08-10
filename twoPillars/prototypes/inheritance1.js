//  || Prototypal Inheritance ||
// object accessing properties/methods of another object

// Function() and Array[] inherit from Object{}
const array = [];
array.__proto__; // returns array constructor
array.__proto__.__proto__; // returns object constructor

function a() {}
a.__proto__; // returns function constructor
a.__proto__.__proto__; // returns object constructor

// class = syntactical sugar, there is only prototypical inheritance
