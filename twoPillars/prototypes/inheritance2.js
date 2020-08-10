let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, breather of fire`;
    }
  },
};

let lizard = {
  name: "Tony",
  fight() {
    return 1;
  },
};

// setting the lizard's prototype template to inherit from the dragon object
// v-- should never use this syntax to manually create chains, inefficient
lizard.__proto__ = dragon;
// null -> object -> dragon -> lizard
//         ^--       ^-- each arrow indicates a prototype
for (let prop in lizard) {
  // searches up the prototype chain for a property
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  } else {
    console.log("on prototype", prop);
  }
}
// Using prototypes and inheritance allows us to save memory
