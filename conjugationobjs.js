const toSpeak = {
  present: "I speak",
  "present progressive": "I am speaking",
  "present perfect": "I have spoken",
  preterite: "I spoke",
  future: "I was speaking",
  conditional: "I would speak",
};

// for hard-coded conjugations:
// form imput recognized by event handler to request specific object from the
// many hard coded objects. Conjugations will then display in the modal window.

console.log(toSpeak["present perfect"]);

function Conjugations(verb) {
  this.translation = translation; // pass google api translation funciton
  this.present = present;
  this.preterite = preterite; // these conjugations will be stored as subobjects or arrays
  this.imperfect = imperfect;
  this.conditional = conditional;
  this.future = future;
}

var hablar = new Conjugations(
  ["hablar = to talk; to speak"],
  // present tense
  ["habla, halbas, habla, hablamos, habláis, hablan"]
);

var poner = new Conjugations();

console.log(hablar.present);

// find best object structure; hard code at first, then connect API, then re-code on top of API GET requests for conjugations in modal window

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


// Let's make this table pop up

// so for this

// POPUP ON CLICK WITH THE conjugationsTable innerHTML

// Add hard-coded conjugations to CSS styled pop-up window upon click.
// The popup window will hold the hide button
// restructure the HTML into divs
*/
