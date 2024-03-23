function addToList() {
  document.getElementById("btn1").addEventListener("click", function () {
    const list = document.getElementById("numberlist");
    const newnumber = list.children.length + 1;
    const newLi = document.createElement("li");
    newLi.textContent = newnumber;
    list.appendChild(newLi);
  });
}

function removeLast() {
  document.getElementById("btn2").addEventListener("click", function () {
    const list = document.getElementById("numberlist");
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
    }
  });
}
