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
// "Variable environment"
//
