const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addElem);
const input = document.getElementById("input");
input.addEventListener("keydown", enter);

function enter(e) {
  if (e.keyCode === 13) {
    addElem();
  }
}

function addElem() {
  const childDiv = document.createElement("div");

  const doneButton = document.createElement("BUTTON");
  doneButton.className = "doneButton";


  const deleteButton = document.createElement("BUTTON");
  deleteButton.className = "deleteButton";

  if (input.value != "") {
    childDiv.innerText = input.value;
    input.value = "";
    childDiv.className = "inputValueDiv";
    document.getElementById("div").append(childDiv);
    childDiv.append(doneButton);
    childDiv.append(deleteButton);
  }

  // console.log(input.which);

  function remove() {
    childDiv.remove();
  }

  let bool = true;


  function done() {
    if (bool === true) {
      childDiv.style.textDecoration = "line-through";
      childDiv.style.backgroundColor = 'moccasin'
      bool = false;
    } else {
      childDiv.style.textDecoration = "none";
      childDiv.style.backgroundColor = 'white'
      bool = true;
    }
  }

  deleteButton.addEventListener("click", remove);
  doneButton.addEventListener("click", done);
}