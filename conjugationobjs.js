const toSpeak = {
  present: "I speak",
  "present progressive": "I am speaking",
  "present perfect": "I have spoken",
  preterite: "I spoke",
  future: "I was speaking",
  conditional: "I would speak",
};

console.log(toSpeak["present perfect"]);

function Conjugations(englishVerb) {
  this.translation = translation; // pass google api translation funciton
  this.present = present;
  this.preterite = preterite;
  this.imperfect = imperfect;
  this.conditional = conditional;
  this.future = future;
}

var hablar = new Conjugations();
