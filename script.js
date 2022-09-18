// USE CHROME BROWSER CONSOLE TO DEBUG
/*
const { json } = require("stream/consumers");

//alert("SELECT LANGUAGE");
var conjugationsFromAPI;
let hiddenButton = document.getElementById("hidden-Button");
*/
let conjugateButton = document.getElementById("conjugate-Button");
let conjugationsReveal = document.getElementById("conjugations");
let verbTranslation = document.getElementById("verb-Translation");
let hideConjugation = document.getElementById("hide-Conjugations");

//let conjugatedPopUp = document.getElementByClass("popUp");

var popUp = document.getElementsByClassName("popup");

const conjugationsTable = document.getElementById("conjugationsTable");

// On Monday Sept 12th we need to make a popup appear with the hard-coded yo hablar conjugation and work from there
// and store 10 common verbs into objects, then use prototype knowledge to take it further

function showTable() {
  popUp.innerHTML = conjugationsTable;
  //conjugationsTable.style.display = "block";
  //hiddenButton.style.display = "inline-block";
}

conjugateButton.onclick = showTable();

function Conjugations(
  translation,
  present,
  preterite,
  imperfect,
  conditional,
  future
) {
  this.translation = translation; // pass google api translation funciton
  this.present = present;
  this.preterite = preterite; // these conjugations will be stored as subobjects or arrays
  this.imperfect = imperfect;
  this.conditional = conditional;
  this.future = future;
}

// translation specific verb object made with "new" object constructor
// later we will add these to the modal window, organized in an html table
var hablar = new Conjugations(
  ["hablar = to talk; to speak"],
  // present tense
  ["habla, halbas, habla, hablamos, habláis, hablan"]
);

var poner = new Conjugations();

console.log(hablar.present);

// MODAL WINDOW POPUP TEST FUNCTIONALITY

// get the modal itself
var modal = document.getElementsByClassName("modal");
// get button that opens the modal
var modalBtn = document.getElementById("modalBtn");
// get the modal content
var modalContent = document.getElementsByClassName("mainModal");
// span element that closes the modal window
var span = document.getElementsByClassName("close")[0];
// when the user clicks the modal button, open the modal
modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});
// when user clicks <span> close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// close modal if user clicks anywhere outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = none;
  }
};

/*
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

function hideButtonOnClick() {
  hiddenButton.style.display = "none";
}

hiddenButton.addEventListener("click", hideButtonOnClick);


// next step:
// We now have the conjugations tale in html so here we add it to a js variable


// linked to clickme function in above variable

*/
// Let's make this table pop up

// so for this

// POPUP ON CLICK WITH THE conjugationsTable innerHTML

// Add hard-coded conjugations to CSS styled pop-up window upon click.
// The popup window will hold the hide button
// restructure the HTML into divs
