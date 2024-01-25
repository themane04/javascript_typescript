document.getElementById("div1").addEventListener("mouseenter", (e) => {
  e.target.style.background = "green";
});
document.getElementById("div1").addEventListener("mouseleave", (e) => {
  e.target.style.background = "blue";
});

var interval;
var movedistance = 5;
function moveSelection(evt) {
  if (interval) {
    clearTimeout(interval);
  }
  interval = setInterval(move, 10, evt);
}
function move(evt) {
  let element = document.getElementById("div2");
  switch (evt.keyCode) {
    case 65:
      element.style.left = parseInt(element.style.left) - movedistance + "px";
      break;
    case 68:
      element.style.left = parseInt(element.style.left) + movedistance + "px";
      break;
    case 87:
      element.style.top = parseInt(element.style.top) - movedistance + "px";
      break;
    case 83:
      element.style.top = parseInt(element.style.top) + movedistance + "px";
      break;
  }
}
function moving(evt) {
  clearInterval(interval);
  interval = null;
}

window.addEventListener("keydown", moveSelection);
window.addEventListener("keyup", moving);
