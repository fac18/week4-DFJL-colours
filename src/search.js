const colorNames = require("./color-names.json");

function searchColors(inputQuery) {
  let searchResults = [];
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
  let shortResults = searchResults.slice(0, 10);
  // produce object to return w/ appropriate keys & value
  let finalObject = {};
  shortResults.forEach(x => {
    finalObject[x] = colorNames[x];
  });
  return finalObject;
}

module.exports = searchColors;
