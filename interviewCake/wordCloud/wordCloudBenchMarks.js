var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

const { WordCloudData } = require("./wordCloudClass");
const { wordFrequency } = require("./wordCloudData");

const WordClass = new WordCloudData("We came, we saw, we ate cake.");
console.log(WordClass.populateWordsToCounts());

// add tests
suite
  .add("cloudClass", function () {
    WordClass.populateWordsToCounts();
  })
  .add("cloudFunction", function () {
    wordFrequency("We came, we saw, we ate cake.");
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });
