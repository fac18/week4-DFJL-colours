# CSS Colours Autocompleter

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

We landed on *colours* because a) Nikke found a JSON file containing all the CSS colors with their hexes, and b) we didn't want to make stress for ourselves with unnecessary API problems. 

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

- [ ] have options for [CSS colour](https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json) autocompleted as they type in the search field
- [ ] select options from a dropdown by clicking or keyboard navigation
- [ ] see the colours alongside names in the dropdown menu 
- [ ] hit the search button to navigate to a new page with information about complementary colours, etc.

---

- [ ] type continuously without any delay or blocking
- [ ] search within colour names after typing 3 letters or more
- [ ] see any colour they select become the page background

---

### Stretch goals

- [ ] make a copy button to grab the hex for selected colour
- [ ] integrate colour palette/complementary colours relating to selected colour into main page
- [ ] make another page with the full list of CSS colours
