// Extend the functinoality of a built in object

//#1
//Date object => to have new method .lastYear()
//which shows you last year 'YYYY' format

// add method lastYear() to Date prototype
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
let test = new Date("1900-10-10").lastYear();
console.log(test);
//'1889'

//#Bonus
// Modify .map() to print 'x' at the end of each item
Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "x");
  }
  return arr;
};
console.log([1, 2, 3].map());
