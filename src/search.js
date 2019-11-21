const colorNames = require('./color-names.json');
let searchResults = [];

function searchColors(inputQuery) {
  searchResults = [];
  let chars = inputQuery.length;
  const colorKeys = Object.keys(colorNames);

  if (chars < 3) {
    colorKeys.forEach(color => {
      if (color.startsWith(inputQuery)) {
        searchResults.push(color);
      }
    });
  } else {
    colorKeys.forEach(color => {
      if (color.includes(inputQuery)) {
        searchResults.push(color);
      }
    });
  }

  // limit size of returned array (to length 10)
  searchResults = searchResults.slice(0, 10);
  return searchResults;
}

searchColors('blu');
console.log(searchColors('blu'));
console.log(searchResults);

module.exports = searchColors;