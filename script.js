// Get object forms working
// Get modal window working
// Get API working
// Rebuild with React
// add MongoDB for account setup
// flashcard functionality (need backend to store data of 'need to work on')

/*
const { json } = require("stream/consumers");

//alert("SELECT LANGUAGE");
var conjugationsFromAPI;
let hiddenButton = document.getElementById("hidden-Button");

let conjugateButton = document.getElementById('conjugate-Button');
let conjugationsReveal = document.getElementById('conjugations');
let verbTranslation = document.getElementById('verb-Translation');
let hideConjugation = document.getElementById('hide-Conjugations');


var popUp = document.getElementsByClassName('popup');

const conjugationsTable = document.getElementById('conjugationsTable');

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
  ['hablar = to talk; to speak'],
  // present tense
  ['habla, halbas, habla, hablamos, habláis, hablan']
);

var poner = new Conjugations();

console.log(hablar.present);

// MODAL WINDOW POPUP TEST FUNCTIONALITY

// get the modal itself
var modal = document.getElementsByClassName('modal');
// get button that opens the modal
var modalBtn = document.getElementById('modalBtn');
// get the modal content
var modalContent = document.getElementsByClassName('mainModal');
// span element that closes the modal window
var span = document.getElementsByClassName('close')[0];
// when the user clicks the modal button, open the modal
modalBtn.addEventListener('click', function () {
  //console.log("hello");
  modal.style.display = 'block';
});
// when user clicks <span> close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
// close modal if user clicks anywhere outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = none;
  }
};


let form = document.getElementById('formSubmission');
let table = document.getElementById('tableData');
*/
let form = document.getElementById('formSubmission');

let table = document.getElementById('tableData');

const conjugateButton = document.getElementById('conjugateButton');
const closeButton = document.getElementById('closeButton');
const modalWindow = document.getElementById('modalWindow');

function showConjugations() {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submit();
    modalWindow.style.opacity = 80;
    modalWindow.style.visibility = 'visible';
  });
}
showConjugations();

function hideConjugations() {
  closeButton.addEventListener('click', function () {
    modalWindow.style.opacity = 0;
    modalWindow.style.visibility = 'hidden';
  });
}
hideConjugations();

// submit function
function submit() {
  let verb = document.getElementById('verbInput').value;
  console.log(verb);
  if (verb == 'hablar') {
    yoPresent.innerHTML = hablar.present[0];
    yoPreterite.innerHTML = hablar.preterite[0];
    yoImperfect.innerHTML = hablar.imperfect[0];
    yoConditional.innerHTML = hablar.conditional[0];
    yoFuture.innerHTML = hablar.future[0];
    tuPresent.innerHTML = hablar.present[1];
    tuPreterite.innerHTML = hablar.preterite[1];
    tuImperfect.innerHTML = hablar.imperfect[1];
    tuConditional.innerHTML = hablar.conditional[1];
    tuFuture.innerHTML = hablar.future[1];
    ustedPresent.innerHTML = hablar.present[2];
    ustedPreterite.innerHTML = hablar.preterite[2];
    ustedImperfect.innerHTML = hablar.imperfect[2];
    ustedConditional.innerHTML = hablar.conditional[2];
    ustedFuture.innerHTML = hablar.future[2];
    nosPresent.innerHTML = hablar.present[3];
    nosPreterite.innerHTML = hablar.preterite[3];
    nosImperfect.innerHTML = hablar.imperfect[3];
    nosConditional.innerHTML = hablar.conditional[3];
    nosFuture.innerHTML = hablar.future[3];
    vosPresent.innerHTML = hablar.present[4];
    vosPreterite.innerHTML = hablar.preterite[4];
    vosImperfect.innerHTML = hablar.imperfect[4];
    vosConditional.innerHTML = hablar.conditional[4];
    vosFuture.innerHTML = hablar.future[4];
    ustedesPresent.innerHTML = hablar.present[5];
    ustedesPreterite.innerHTML = hablar.preterite[5];
    ustedesImperfect.innerHTML = hablar.imperfect[5];
    ustedesConditional.innerHTML = hablar.conditional[5];
    ustedesFuture.innerHTML = hablar.future[5];
  } else if (verb == 'comer') {
    yoPresent.innerHTML = comer.present[0];
    yoPreterite.innerHTML = comer.preterite[0];
    yoImperfect.innerHTML = comer.imperfect[0];
    yoConditional.innerHTML = comer.conditional[0];
    yoFuture.innerHTML = comer.future[0];
    tuPresent.innerHTML = comer.present[1];
    tuPreterite.innerHTML = comer.preterite[1];
    tuImperfect.innerHTML = comer.imperfect[1];
    tuConditional.innerHTML = comer.conditional[1];
    tuFuture.innerHTML = comer.future[1];
    ustedPresent.innerHTML = comer.present[2];
    ustedPreterite.innerHTML = comer.preterite[2];
    ustedImperfect.innerHTML = comer.imperfect[2];
    ustedConditional.innerHTML = comer.conditional[2];
    ustedFuture.innerHTML = comer.future[2];
    nosPresent.innerHTML = comer.present[3];
    nosPreterite.innerHTML = comer.preterite[3];
    nosImperfect.innerHTML = comer.imperfect[3];
    nosConditional.innerHTML = comer.conditional[3];
    nosFuture.innerHTML = comer.future[3];
    vosPresent.innerHTML = comer.present[4];
    vosPreterite.innerHTML = comer.preterite[4];
    vosImperfect.innerHTML = comer.imperfect[4];
    vosConditional.innerHTML = comer.conditional[4];
    vosFuture.innerHTML = comer.future[4];
    ustedesPresent.innerHTML = comer.present[5];
    ustedesPreterite.innerHTML = comer.preterite[5];
    ustedesImperfect.innerHTML = comer.imperfect[5];
    ustedesConditional.innerHTML = comer.conditional[5];
    ustedesFuture.innerHTML = comer.future[5];
  } else {
    // make popup window that says incorrect and reset the form. don't show any results.
    alert('Incorrect entry. Please try again');
    modalWindow.style.opacity = 0;
    modalWindow.style.visibility = 'hidden';
  }
}

const hablar = {
  present: ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan '],
  preterite: [
    'hablé',
    'hablaste',
    'habló',
    'hablamos',
    'hablasteis',
    'hablaron',
  ],
  imperfect: [
    'hablaba',
    'hablabas',
    'hablaba',
    'hablábamos',
    'hablabais',
    'hablanan',
  ],
  conditional: [
    'hablaría',
    'hablarías',
    'hablaría',
    'hablaríamos',
    'hablarías',
    'hablarían',
  ],
  future: [
    'hablaré',
    'hablarás',
    'hablará',
    'hablaremos',
    'hablaréis',
    'hablarán',
  ],
};

const comer = {
  present: ['como', 'comes', 'come', 'comemos', 'coméis', 'comen'],
  preterite: ['comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron'],
  imperfect: ['comía', 'comías', 'comía', 'comíamos', 'comíais', 'comían'],
  conditional: [
    'comería',
    'comerías',
    'comería',
    'comeríamos',
    'comeríais',
    'comerían',
  ],
  future: ['comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'],
};
