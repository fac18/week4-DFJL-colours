const search = require("../src/search.js");
const test = require("tape");

test("Tape is working", function(t) {
  t.equal(1, 1, "This test should always pass");
  t.end();
});

test("The search.js/searchColors function does not mutate passed string (/is pure)", t => {
  let queryString = "yell";
  search(queryString);
  t.equals(
    queryString,
    "yell",
    "A variable passed to the function as argument should be unchanged"
  );
  t.end();
});

test("The search.js/searchColors function searches the color list as expected", t => {
  t.deepEquals(
    Object.keys(search("que")),
    ["antiquewhite", "bisque"],
    'Searching "que" should return 2 results'
  );
  t.deepEquals(
    Object.keys(search("aq")),
    ["aqua", "aquamarine", "mediumaquamarine"],
    'Searching "aq" should return 3 results'
  );
  t.equals(
    Object.keys(search("blu")).length,
    10,
    'Searching "blu" should return only 10 results'
  );
  t.equals(
    typeof search("dark"),
    "object",
    'Searching "dark" should return an object'
  );
  t.end();
});
