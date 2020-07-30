/*
||  Function Invocation  ||
*/
var canada = () => {
  console.log("canada");
};

function india() {
  console.log("india");
}
// creates new execution context
// "this" and "arguments" keyword
// arguments = key value pairs of index: args
function marry2(...args) {
  console.log(args);
}

marry2("john", "jame", "joe");
// "Variable environment" - lexical scope of vars on each function

/*
||  Scope Chain  ||
*/
// the scoping of variable/data access, based on nested level of execution context
// program searches all the way down to global context to find var/data
function sayMyName() {
  return function findName() {
    return function printName() {
      return "A name";
    };
  };
}

console.log(sayMyName()()());
