// ternary operator
let yes = true;

yes ? console.log(yes) : false;

// switch statement
function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "backward":
      whatHappens = "you find a gold bag";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

console.log(moveCommand());
