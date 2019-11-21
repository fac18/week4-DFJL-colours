console.log("halloooo");

const inputField = querySelector("search-form__input");

// write API in event listener
inputField.addEventListener("input", event => {
  let query = new XMLHttpRequest();
  let inputText = inputField.value;
  query.onload = () => {
    if (query.status === 200) {
      // DOM population function goes here
      console.log("The DOM will now be populated with returned information");
    } else {
      console.log(`Error, status is: ${query.status}`);
    }
  };
  query.open("GET", "/search", true);
  query.send();
});
