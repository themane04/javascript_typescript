function addToList() {
  //write a function that adds a new element to list with the correct number in the innertext
  let newel = document.createElement("li");
  let list = document.getElementById("numberlist");
  newel.innerText = (list.children.length + 1).toString();
  list.appendChild(newel);
}

function removeLast() {
  //remove the last element from the list
  let list = document.getElementById("numberlist");
  list.removeChild(list.lastChild);
}
