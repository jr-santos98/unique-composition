// ****** select items **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".glocery-form");
const glocery = document.getElementById("glocery");
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".glocery-container")
const list = document.querySelector(".glocery-list")
const clearBtn = document.querySelector(".clear-btn")

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = glocery.value;
  const id = new Date().getTime().toString();
  console.log(id);
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
