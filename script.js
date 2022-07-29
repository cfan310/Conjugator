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

// Account page

// next up is to create secure logins using cryptographic js data structure
// add flashcards section template and js logic
// css template before main js functionaity
