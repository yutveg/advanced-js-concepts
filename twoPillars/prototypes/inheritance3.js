function a() {}
console.log(a.hasOwnProperty("call"));
// returns false, functions do not have bind, call, or apply
// on themselves, it comes from the base function constructor
// object -> function constructor -> function a
