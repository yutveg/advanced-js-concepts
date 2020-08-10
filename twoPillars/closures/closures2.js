function initialSetUp() {
  let wasInitialized = false;
  const initialize = () => {
    if (wasInitialized) {
      return;
    } else {
      console.log(wasInitialized);
      view = "some view";
      console.log("view has been set!");
      wasInitialized = true;
    }
  };
  return {
    initialize: initialize,
  };
}

const setUp = initialSetUp();
setUp.initialize();
setUp.initialize();

// Problem: Initialize is to only be ran once.
// Design a way to only run initialize once,
// even if it is called multiple times.

// Plan: Create a higher order function that returns
// initialize. A global flag will notify the function
// whether initialize has been called. With this, we
// can decide whether it continues returning initialize
// or not.
