// USE CHROME BROWSER CONSOLE TO DEBUG
/*
const { json } = require("stream/consumers");
*/
//alert("SELECT LANGUAGE");

let conjugateButton = document.getElementById("conjugate-Button");
let conjugationsReveal = document.getElementById("conjugations");
let verbTranslation = document.getElementById("verb-Translation");
let hideConjugation = document.getElementById("hide-Conjugations");

//let conjugatedPopUp = document.getElementByClass("popUp");

var conjugationsFromAPI;

let hiddenButton = document.getElementById("hidden-Button");

function showConjugationsOnClick() {
  // function to reveal hard-coded conjugation example
  conjugationsReveal.style.display = "block";
  verbTranslation.innerHTML = "hablar"; // trobuleshoot why this hard-coded poner doesn't show up
  conjugationsReveal.innerHTML = "hablar = to speak";
  hiddenButton.style.display = "inline-block"; // and we will also reveal the "hide" button
}

conjugateButton.addEventListener("click", showConjugationsOnClick);
// activate show conjugations function after clicking the conjugate button

/*
function hideConjugationsOnClick() {
  conjugationsReveal.style.display = "none";
  verbTranslation.style.display = "none";
  hideConjugation.style.display = "none";
}
hideConjugation.addEventListener("click", hideConjugationsOnClick);

function hideButtonOnClick() {
  hiddenButton.style.display = "none";
}

hiddenButton.addEventListener("click", hideButtonOnClick);


// next step:
// We now have the conjugations tale in html so here we add it to a js variable
const conjugationsTable = document.getElementById("conjugationsTable");

// linked to clickme function in above variable
function showTable() {
  conjugateButton.innerHTML(conjugationsTable);
  conjugationsTable.style.display = "block";
  verbTranslation.innerHTML = "hablar";
  hiddenButton.style.display = "inline-block";
}
*/
// Let's make this table pop up

// so for this
// let conjugateButton = document.getElementById("conjugate-Button");

// POPUP ON CLICK WITH THE conjugationsTable innerHTML

// Add hard-coded conjugations to CSS styled pop-up window upon click.
// The popup window will hold the hide button
// restructure the HTML into divs
