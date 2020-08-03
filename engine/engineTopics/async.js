console.log("1");
// this setTimeout function gets added to the web API
setTimeout(() => {
  console.log("2"), 1000;
});
console.log("3");
// once call stack is empty, the setTimeout callback is added to it via the event viewer
