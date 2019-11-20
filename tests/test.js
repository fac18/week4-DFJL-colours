const search = require('../src/search.js');
const test = require('tape');

test('Tape is working', function (t) {
  t.equal(1, 1, 'Tape should work');
  t.end();
});

test('Find matching names from color-names.json file', function (t) {
  let actual = search('aq');
  let expected = ['aqua', 'aquamarine'];
  t.deepEquals(actual, expected, 'Searching "aq" should return two results');
  t.end();
});

