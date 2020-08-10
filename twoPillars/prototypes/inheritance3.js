function a() {}
console.log(a.hasOwnProperty("call"));
// returns false, functions do not have bind, call, or apply
// on themselves, it comes from the base function constructor
// null -> object -> function constructor -> function a

// prototype {
//     ...props,
//     __proto__: someProtoype
// }
// __proto__ is simply a pointer to some other prototype

let human = {
  mortal: true,
};
// better method to use than directly setting __proto__
let socrates = Object.create(human);
console.log(socrates.mortal);

// Object is a function, because it has the prototype property
// typeof Object === function
// Object.prototype is the base object
