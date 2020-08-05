function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} ${father} ${son}`;
    };
  };
}

console.log(a()()());

// even after a() is popped off the stack,
// c() still has access to its variable

// || Stack ||
// c() var env: son
// b() var env: father
// a() var env: grandpa // garbage collector will ignore
// variables that are required via closure
