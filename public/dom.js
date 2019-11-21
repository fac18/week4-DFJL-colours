const inputBox = document.querySelector('#inputBox');
const datalist = document.querySelector('#suggestions');
const searchButton = document.querySelector('#searchButton');
const clearButton = document.getElementById('clearButton');

// assuming results from search.js backend api
// now will be received in JSON format
const testArray = [
  'aliceblue',
  'blue',
  'blueviolet',
  'cadetblue',
  'cornflowerblue',
  'darkblue',
  'darkslateblue',
  'deepskyblue'
  // 'dodgerblue',
  // 'lavenderblush'
];

clearButton.onclick = function clearResults() {
  let defaultArray = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure'
  ];

  inputBox.value = '';

  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }

  defaultArray.forEach(x => {
    let colorOption = document.createElement("option");
    colorOption.classList.add("color");
    colorOption.value = x;
    datalist.appendChild(colorOption);
  });
}
console.log(inputBox.value);
// update option dropdown element for colors 
function updateResults() {
  // clear all current dropdown options
  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }
  // add new dropdown options upon search
  testArray.forEach((x, i) => {
    let colorOption = document.createElement("option");
    colorOption.classList.add("color");
    colorOption.value = x;
    datalist.appendChild(colorOption);
  });
}