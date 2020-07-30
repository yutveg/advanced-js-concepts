// Execution Context
// Engine creates a global() execution context initially
// Comes with Global Object, and this keyword
function printName() {
  return "Andrew Neagoie";
}

function findName() {
  // creates NEW execution context, pushes to stack
  return printName();
}

function sayMyName() {
  // creates NEW execution context, pushes to stack
  return findName();
}
// creates execution context when engine sees "()"
// adds context onto the stack
sayMyName();

// global() execution context popped off after program done
