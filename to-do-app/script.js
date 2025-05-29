// document.getElementById("ourForm").addEventListener

//OR

let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourField.value);
});

function createItem(x) {
  let HTML = `<li>${x}<button onclick="deleteItem(this)">Delete</button></li>`;
  ourList.insertAdjacentHTML("beforeend", HTML);
  ourField.value = "";
  ourField.focus();
}

function deleteItem(item) {
  // console.log(item.parentElement);
  item.parentElement.remove();
}
