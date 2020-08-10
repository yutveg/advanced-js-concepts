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

lizard.__proto__ = dragon;

console.log(dragon.isPrototypeOf(lizard));
