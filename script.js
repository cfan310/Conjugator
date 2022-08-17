let buttonClick = document.getElementById("button1");

let conjugationsReveal = document.getElementById("conjugations");

let verbTranslation = document.getElementById("verbTranslation");

let hideConjugation = document.getElementById("hideConjugations");

let conjugatedPopUp = document.getElementByClass("popUp");

var conjugationsFromAPI;

let hiddenButton = document.getElementById("hiddenButton");

function hideButtonOnClick() {
  hiddenButton.style.display = "none";
}

hiddenButton.addEventListener("click", hideButtonOnClick);

// on click, show conjugations in a POP UP

// <div class="answerPopUp" onclick="popUp()">

// function popUp() {}

function showConjugationsOnClick() {
  conjugationsReveal.style.display = "block";
  verbTranslation.innerHTML = "poner"; // example
  conjugationsReveal.innerHTML = "to put; to place";
  hideConjugation.style.display = "inline-block";
  // and we will also reveal the "hide" button
}

function hideConjugationsOnClick() {
  conjugationsReveal.style.display = "none";
  verbTranslation.style.display = "none";
  hideConjugation.style.display = "none";
}

buttonClick.addEventListener("click", showConjugationsOnClick);
hideConjugation.addEventListener("click", hideConjugationsOnClick);

/*

let mainTitle = document.getElementById("maintext");
let changeTextButton = document.getElementById("mainTextButton");


let newTitle = "French Verb Conjugator";

function changeText() {
  mainTitle.innerHTML = newTitle;
}


changeTextButton.addEventListener("click", changeText);

// Add the Spanish verb input as innerHTML in the div below

var verbInput = document.getElementById("tense");

var printedText = document.getElementById("verbInput");

function addVerbToDiv() {
  // now the printet text below the Conjugation: header will contain an English
  // translation of the Spanish word typed into the input form
  printedText == verbInput;
}

addVerbToDiv();

// button test

// Username and password page functionality

// Flashcards functionality

// Account page

// next up is to create secure logins using cryptographic js data structure
// add flashcards section template and js logic
// css template before main js functionaity

// adding css animation and google translate API key before
// worrying about the conjugations
*/
