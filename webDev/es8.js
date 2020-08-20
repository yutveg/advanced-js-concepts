console.log("Turtle".padStart(10));
console.log("Fish".padEnd(10));

Object.values;
Object.entries;

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj1).map((item, index) => console.log(item, index));
Object.values(obj1).map((item) => console.log(item));
Object.entries(obj1).map((item) => console.log(item));
