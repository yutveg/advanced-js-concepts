// ECMA International = JS standard
// ES5 === EcmaScript5
// ES6 === EcmaScript6
// Babel => increases browser compatibility
// Compiles JS to a version of JS that is compatible to all browsers
const player = "bobby";
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
