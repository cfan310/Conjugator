let buttonClick = document.getElementById("button1");

let conjugationsReveal = document.getElementById("conjugations");

function showConjugationsOnClick() {
  conjugationsReveal.style.display = "block";
  conjugationsReveal.innerHTML = "to put; to place";
}

buttonClick.addEventListener("click", showConjugationsOnClick);

let mainTitle = document.getElementById("maintext");
let changeTextButton = document.getElementById("mainTextButton");

let newTitle = "French Verb Conjugator";

function changeText() {
  mainTitle.innerHTML = newTitle;
}

changeTextButton.addEventListener("click", changeText);

// button test

// Username and password page functionality

// Flashcards functionality

// Accoiunt page
