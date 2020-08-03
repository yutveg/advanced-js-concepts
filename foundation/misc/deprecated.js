// inline caching
function findUser(user) {
  return `Found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: "Johnson",
  lastName: "Junior",
};

console.log(findUser(userData));

// Compiler can optimize this using Inline Caching
// will replace function findUser with its return string object

//hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const objectOne = new Animal(1, 2);
const objectTwo = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
// compiler will slow down code here because:
// it will think the objects have different classes
// solution: either add new properties in same order,
// or only instantiate inside class constructor
obj2.b = 30;
obj2.a = 100;
