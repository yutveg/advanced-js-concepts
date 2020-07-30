function jsengine(code) {
  return code.split(/\s+/);
}

console.log(jsengine("var a = 5"));

function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalculation(5, 4);
}
