const inputBox = document.querySelector("#inputBox");
const inputText = document.querySelector("#inputBox").value;
const datalist = document.querySelector("#suggestions");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.getElementById("clearButton");

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
console.log(inputBox.value);

searchButton.onclick = hexColor => {
  let hexColor = Object.values(inputText);
  searchButton.href = `https://coolors.co/ffffff-808080-${hexColor}-808080-ffffff`;
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
