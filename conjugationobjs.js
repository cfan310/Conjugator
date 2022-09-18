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
