var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

const { WordCloudData } = require("./wordCloudClass");
const { wordFrequency } = require("./wordCloudData");

const WordClass = new WordCloudData(
  "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
);
console.log(WordClass.populateWordsToCounts());
console.log(
  wordFrequency(
    "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
  )
);
// add tests
suite
  .add("cloudClass", function () {
    WordClass.populateWordsToCounts();
  })
  .add("cloudFunction", function () {
    wordFrequency(
      "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
    );
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
