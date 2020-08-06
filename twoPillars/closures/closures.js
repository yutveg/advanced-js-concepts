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

// Closures even work with processes that get offloaded
// to the web API. The JS engine knows that there is still a reference
// on the callback queue, and won't garbage collect the item

// ||  Andrei's Primary Benefits  ||
// memory efficient
// encapsulation
function heavyDuty(index) {
  const bigArray = new Array(7000).fill(":)");
  console.log("Created");
  return bigArray[index];
}

console.log(heavyDuty(677));
console.log(heavyDuty(677));
console.log(heavyDuty(677));
const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(700));
console.log(getHeavyDuty(730));
console.log(getHeavyDuty(705));

function heavyDuty2() {
  const bigArray = new Array(7000).fill(":)");
  console.log("Created2");
  return function (index) {
    return bigArray[index];
  };
}

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "boom";
  };
  setInterval(passTime, 1000);
  // encapsulating functionality/data from returned object
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime,
  };
};

// Principle of least privilege

const ohNo = makeNuclearButton();
console.log(ohNo.totalPeaceTime());
console.log(ohNo.launch());
