// ECMA International = JS standard
// ES5 === EcmaScript5
// ES6 === EcmaScript6
// Babel => increases browser compatibility
// Compiles JS to a version of JS that is compatible to all browsers
const human = "bobby";
let experience = 100;
var varWizardLevel = false;
let letWizardLevel = false;

if (experience > 90) {
  // var is not block-scoped, so it overwrites the global varWizardLevel
  var varWizardLevel = true;
  let letWizardLevel = true;
  console.log("if", varWizardLevel);
  console.log("if", letWizardLevel);
}

console.log("global", varWizardLevel);
console.log("global", letWizardLevel);

// Constants
const obj = {
  player: "Thomas",
  health: 100,
};

// can't reassign the variable i.e; obj = 5;
// but can reassign object properties
obj.player = "doug";
console.log(obj.player);

// Destructuring
const { player, health } = obj;
console.log(player, health);

// Declaring object properties, dynamic property values
const name = "joseph";
const obj2 = {
  [name]: "hello",
  [1 + 2]: "hihi",
};

const a = "simon";
const b = true;
const c = {};

// simple property declarations
const obj3 = {
  a,
  b,
  c,
};

// template strings
const someValue = 5;
const stringTemplated = `here is ${someValue}`;

// Symbol type
let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
// creates a unique value, not a reference value
let sym3 = Symbol("foo");
console.log(sym2 === sym3);

// Arrow functions ( lexically bound this keyword )
const add = (a, b) => a + b;
console.log(add(3, 4));
