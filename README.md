# CSS Colours Autocompleter

---

## Installation

It's a quick one! Just run the following code in your terminal to get started:

```bash
git clone git@github.com:fac18/week4-DFJL-colours.git
cd week4-DFJL-colours
npm i
npm start
```

Then navigate to localhost:1234 with a browser.

---

## Initial workup

We started by brainstorming ideas for our project:

![](https://i.imgur.com/S9fAS7Q.jpg)

---

So these included:

* A film/TV searcher (considered a pirate Netflix API)
* SlangSearch with an unofficial Urban Dictionary API
* Iconic trainers (e.g. Reebok > classics)
* Dinosaur species
* Pokemon
* Cities of the UK
* Colours

---

We landed on *colours* because 
a) Nikke found a JSON file containing all the CSS colors with their hexes, and 
b) we didn't want to make stress for ourselves with unnecessary API problems. 

---

Then we sketched the GUI:

![](https://i.imgur.com/AMLvEKM.jpg)

---

And then we drew:
* a flow chart to try and understand how the frontend and backend related to each other, and how information (as objects/variables) would flow between them
* the organisation of our file system (src, public, tests folders etc) and their population with appropriately named files

---

![](https://i.imgur.com/GpwtBFB.jpg)

---

## User stories

Since they weren't provided by the [project outline](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-4/project.md) this time around, and now that we knew the central thrust of our project, we generated some of our own.

---

On landing on our site, a user should be able to:

- [x] have options for [CSS colour](https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json) autocompleted as they type in the search field
- [x] select options from a dropdown by clicking or keyboard navigation
- [ ] see the colours alongside names in the dropdown menu 
- [x] hit the search button to navigate to a new page with information about complementary colours, etc.

---

- [x] type continuously without any delay or blocking
- [x] search within colour names as well as at the start of
- [x] see any colour they type or select become the page background

---

### Stretch goals

- [ ] make a copy button to grab the hex for selected colour
- [ ] integrate colour palette/complementary colours relating to selected colour into main page
- [ ] make another page with the full list of CSS colours

---

## Searching and Auto-completing

---

We knew our autocomplete function had to make sense. 

E.g. when we type in 'bl' we wanted to prioritise 'black' and 'blue' to be returned first AND THEN any other colours that contained 'bl' within its description 

---

So our searchColors function uses a .startsWith() as a search and pushes our results first: 

```javascript=
const colorNames = require("./color-names.json");

// searchColors takes a string to use as search criterion
function searchColors(inputQuery) {
  searchResults = [];
  const colorKeys = Object.keys(colorNames);

  // first add colors *starting* with search query
  colorKeys.forEach(color => {
    if (color.startsWith(inputQuery)) {
      searchResults.push(color);
    }
  });
```

---

Then our search function looks for if it .includes() our colours and pushes to our results:

```javascript=
  // then add any colors *including* search query, not allowing for duplicates
  colorKeys.forEach(color => {
    if (color.includes(inputQuery)) {
      if (!searchResults.includes(color)) {
        searchResults.push(color);
      }
    }
  });
  
```
  
---

---

Lastly, we chunk the data to display the top 10 results (or less) and return a final colour object ready to display in the drop down search options

```javascript=
  // limit size of returned array to length 10
  let shortResults = searchResults.slice(0, 10);

  // produce object to return w/ appropriate keys & value
  let finalObject = {};
  shortResults.forEach(color => {
    finalObject[color] = colorNames[color];
  });
  return finalObject;
}

```

---

## Testing

We wrote the above functions in strict *TDD* style!

---

### Purity

```javascript=
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
```

---

### Correct functioning

```javascript=
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
```

---

### Results

![](https://i.imgur.com/v77leJI.png)

View this alongside our (100%) coverage results:

```bash
npm coverage
```

---

## The API

For the whole first day, we didn't think we'd need any APIs, because we didn't need to fetch any information from external servers.

We were wrong.

![shock horror](https://media.giphy.com/media/jIRPOnUASNsQw/giphy.gif)

---

Because we are running the server!

On learning this news, we tried to draw the flow of data in the machine. This was a messy business.

![data map](https://i.imgur.com/gBJxNzP.jpg)

---

## API fun time

### But how do we get IT!?

#### Trying to do more than one thing with the results of your API

---

```javascript=
inputField.addEventListener("input", event => {
// when typing send input to backend
  let query = new XMLHttpRequest();
  let inputText = inputField.value;
  query.onload = () => {
    if (query.status === 200) {
      let result = JSON.parse(query.responseText);
      //result is an object containing colour names AND HEXs
      console.log("API call response is:", result);
      updateResults(result);
      //updates data list with colour names only (i.e. we lose the hex values)
      if (Object.keys(result).includes(inputText)) {
        document.body.style.backgroundColor = inputText;
      }
    } else {
      console.log(`Error, status is: ${query.status}`);
    }
  };
  query.open("GET", `/search?q=${inputText}`, true);
  query.send();
});

```

---

To link externally we had to have the hex code for the name 

Possible solutions: 
- export the results from the index.js to the dom.js
- new api call to ask for the hex of the chosen colour


---

The simple solution:
```javascript=
let result = ''

inputField.addEventListener("input", event => {
  let query = new XMLHttpRequest();
  let inputText = inputField.value;
  query.onload = () => {
    if (query.status === 200) {
      result = JSON.parse(query.responseText);
      console.log("API call response is:", result);
      updateResults(result);
      if (Object.keys(result).includes(inputText)) {
        document.body.style.backgroundColor = inputText;
      }
    } else {
      console.log(`Error, status is: ${query.status}`);
    }
  };
  query.open("GET", `/search?q=${inputText}`, true);
  query.send();
});

```

---

```javascript=
searchButton.addEventListener("click", event => {
  event.preventDefault();
  let hexColor = result[inputBox.value].slice(1);
  window.open(
    `https://coolors.co/ffffff-808080-${hexColor}-808080-ffffff`,
    "_blank"
  );
});
```

---

## Updating the DOM

![](https://i.imgur.com/pR5CNr7.png)

---

## No style

You can't style a `<datalist>` or it's `<options>`!

To resolve this problem we'd need to build a custom drop-down as an `<ul>`, as some other teams have, and build in the functionality ourselves.

We didn't do this but it's an important limitation to be aware of.

---

## Heroku deployment

We set up our Heroku from the command line:

```bash
heroku create css-colour-machine
touch Procfile
```

In the *Procfile* we wrote:

```javascript
web: node src/server.js
```

After committing changes, back in the terminal:

```bash
git remote set-url heroku https://git.heroku.com/css-colour-machine.git
git push heroku master
```

---

The above worked fine, but when we went to the [heroku site](https://css-colour-machine.herokuapp.com/) itself, it wouldn't work!

We examined the logs by writing
```bash
heroku logs --tail
```
in the terminal, and discovered that the dyno was timing out with port assignment.

This is because the port we were specifying for local hosting (1234) was not the one Heroku was attempting to deploy on.

---

To detect the appropriate port dynamically (in-keeping with the [Heroku docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs), we replaced our line in the server.js file
```javascript
const port = 1234
```
with the following:

```javascript
const PORT = process.env.PORT || 1234;
```

And now it works like a dream!

---

## Celebrations !

### It has been recognised that as a team, we have a lot of loud high-five moments

![highfive](https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif)

---

Here are a list of our favourite high-five moments (big and small):

- when all our tests successfully worked without breaking anything
- creating a server 
- making an extra handler for our API 😲
- connecting the front end to our server with an API
- actually understanding the above
- having a fully functioning datalist with the results of our api call

---

- preventing event defaults on our buttons
- changing the background colour to the colour in the input 😍
- making our external link work
- having a clear box button
