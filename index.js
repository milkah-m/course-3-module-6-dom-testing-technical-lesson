//create add item function
  // get item list ul from dom
  //add li within ul container
  //create new item with text content of "new item"
  //get button
  //use event listener to connect button click to add new item to the li
  //
function addItem(){ //defining function
const itemList = document.getElementById("item-list") //getting ul container
const list = document.createElement("li") //creating li
const newItem = `New Item` //declaring and defining newItem
list.textContent = newItem //letting the content of the list be the new Item
itemList.append(list)} //appending the list to the container

//i have a feeling that this is executing BEFORE the click which is not what i want. i will be back to confirm suspicions

const button = document.getElementById("add-item")
document.addEventListener("DOMContentLoaded", ()=>
button.addEventListener("click", addItem)) //calling the addItem function at the click of the add item button
