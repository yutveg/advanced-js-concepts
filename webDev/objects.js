// reference type
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };
console.log(object1 === object2); // true because both point at same object in memory
console.log(object1 === object3); // false -> points at separate objects in memory
// context vs scope
// this === context refers to the object of which the function belongs to

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduction() {
    return `My name is ${this.name}. I am type ${this.type}.`;
  }
}

class Orc extends Player {
  constructor(name, type) {
    super(name, type);
  }
  introduction() {
    return `My name ${this.name}. Am type ${this.type}.`;
  }
}

const Tamba = new Orc("Tamba", "Orc");
console.log(Tamba.introduction());
