/**
 * @jest-environment jsdom 
 */ //run this code in a browser-like environment :) because node would not accomodate the full functionality of m y code like window



const fs = require("fs"); // file system: lets me load files and read files (node built-in module)
const path = require("path"); //helps me build file paths and avoid OS specific issues like different slashes

// Load the HTML file into jsdom
const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8"); 
// file system read this file synchronously
//create an absolute path to the index.html using its directory name and file name and let the result be in a normal text string (utf-8)


beforeAll(() => { //run this once before all tests in this file (used here to load my html file)
  document.body.innerHTML = html; 
  //document.body is a DOM element not a node object. it is provided globally by jsdom
  //.innerHTML is a setter
  //basically this is setting my jsdom DOM to look like my html document

  require("../index.js"); 
  //i must explicitly require my js file in jest.
  //this runs my code once

 // Fire DOMContentLoaded once so the event listener gets attached
 document.dispatchEvent(new Event("DOMContentLoaded"));//simulate loading of DOM content so that code listening for "DOMContentLoaded"
 //like my button can work
})

beforeEach(() => {//run before EACH test to reset the state
 document.getElementById("item-list").innerHTML = ""; 
 //clearing all child elements of element with said id to ensure freshness of state for each test

});

describe("Add Item Button", () => { //describing what the add item button should do. title of this chapter
  test("adds a new item to the list when the button is clicked", () => { //it adds a new item to the list when the button is clicked
  
    // grabbing elements at the right time after html is loaded, js has ran, and event listeners have been attached
   const button = document.getElementById("add-item"); 
   const list = document.getElementById("item-list"); 

   // check the list is initially empty
   expect(list.children.length).toBe(0); //before button is clicked. list should be empty

  // Simulate a button click
  button.click(); //do the thing

  // Get all the <li> elements in the list and verify the count and text
   expect(list.children.length).toBe(1); //after the button click there should be one item on the list
 expect(list.children[0].textContent).toBe("New Item"); //verify that the list element has the text content of new item
 });
});