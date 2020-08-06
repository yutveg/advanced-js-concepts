// Function that takes a function as an arg
// Or returns a function
const giveAccessTo = (user) => `Access Granted To ${user}`;

function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 10000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}

console.log(letUserLogin("Tyler"));
