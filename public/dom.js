const inputBox = document.querySelector("#search");
const datalist = document.querySelector("#suggestions");
const clearButton = document.getElementById("clearButton");
const searchButton = document.querySelector("#searchButton");

clearButton.onclick = function clearResults(event) {
  event.preventDefault();
  let defaultArray = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure"
  ];

  inputBox.value = "";
  document.body.style.backgroundColor = "";

  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }

  defaultArray.forEach(x => {
    let colorOption = document.createElement("option");
    colorOption.classList.add("color");
    colorOption.value = x;
    datalist.appendChild(colorOption);
  });
};
console.log(search.value);

searchButton.onclick = function linkToExternal(event) {
  event.preventDefault();
  let hexColor = result[inputBox.value].slice(1);
  window.open(
    `https://coolors.co/ffffff-808080-${hexColor}-808080-ffffff`,
    "_blank"
  );
};

// update option dropdown element for colors
function updateResults(result) {
  // clear all current dropdown options
  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }
  // grab colors from passed result object
  let colors = Object.keys(result);
  // add new dropdown options upon search
  colors.forEach((x, i) => {
    let colorOption = document.createElement("option");
    colorOption.classList.add("color");
    colorOption.value = x;
    datalist.appendChild(colorOption);
  });
}
