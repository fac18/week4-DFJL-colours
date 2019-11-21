const inputField = document.querySelector(".search-form__input");

// write API in event listener
inputField.addEventListener("input", event => {
  let query = new XMLHttpRequest();
  let inputText = inputField.value;
  query.onload = () => {
    if (query.status === 200) {
      let result = JSON.parse(query.responseText);
      console.log("API call response is:", result);
      updateResults(result);
    } else {
      console.log(`Error, status is: ${query.status}`);
    }
  };
  query.open("GET", `/search?q=${inputText}`, true);
  query.send();
});
