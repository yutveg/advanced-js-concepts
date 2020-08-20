const first = () => {
  const greet = "hi";
  const second = () => {
    return greet;
  };
  return second;
};

const newFunc = first();
console.log(newFunc());
