const colorNames = require("./color-names.json");

// searchColors takes a string to use as search criterion
function searchColors(inputQuery) {
  searchResults = [];
  let chars = inputQuery.length;
  const colorKeys = Object.keys(colorNames);

  // first add colors *starting* with search query
  colorKeys.forEach(color => {
    if (color.startsWith(inputQuery)) {
      searchResults.push(color);
    }
  });

  // then add any colors *including* search query, not allowing for duplicates
  colorKeys.forEach(color => {
    if (color.includes(inputQuery)) {
      if (!searchResults.includes(color)) {
        searchResults.push(color);
      }
    }
  });

  // limit size of returned array to length 10
  let shortResults = searchResults.slice(0, 10);

  // produce object to return w/ appropriate keys & value
  let finalObject = {};
  shortResults.forEach(x => {
    finalObject[x] = colorNames[x];
  });
  return finalObject;
}

module.exports = searchColors;
