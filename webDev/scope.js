function bb() {
  // var is scoped locally
  var a = "Hello";
}

var fun = 5;

function funFunction() {
  // naming conflict = overwriting parent scoped variable
  var fun = "fun function";
  console.log(fun);
}

function funnerFunction() {
  // naming conflict = overwriting parent scoped variable
  var fun = "funner function";
  console.log(fun);
}

function funnestFunction() {
  fun = "funnest function";
  console.log(fun);
}

console.log(fun);
funFunction();
funnerFunction();
funnestFunction();
