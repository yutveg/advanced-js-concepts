const obj = {
  two() {
    return 2;
  },
};
obj.two();

const four = new Function("num", "return num");
console.log(four(3));

four.someProperty = "ahhh";

// creates a special object
// const specialObj = {
//     someProperty: 'ahhh', // properties onto the function
//     name: 'four', // an optional attribute
//     (): return num
// }
