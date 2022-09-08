// USE CHROME BROWSER CONSOLE TO DEBUG
/*
const { json } = require("stream/consumers");
*/

//alert("SELECT LANGUAGE");

const toSpeak = {
  present: "I speak",
  "present progressive": "I am speaking",
  "present perfect": "I have spoken",
  preterite: "I spoke",
  future: "I was speaking",
  conditional: "I would speak",
};

console.log(toSpeak);

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

function hideConjugationsOnClick() {
  conjugationsReveal.style.display = "none";
  verbTranslation.style.display = "none";
  hideConjugation.style.display = "none";
}

hideConjugation.addEventListener("click", hideConjugationsOnClick);

// Add Popup for conjugations >> CSS animations and sound effects

function hideButtonOnClick() {
  hiddenButton.style.display = "none";
}

hiddenButton.addEventListener("click", hideButtonOnClick);

// next step:

// Add hard-coded conjugations to CSS styled pop-up window upon click.
// The popup window will hold the hide button
// restructure the HTML into divs
