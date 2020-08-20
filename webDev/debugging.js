const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, val) => {
  debugger; // in browser will halt process and allow step thrus
  acc.concat(val);
}, []);
console.log(flattened);
