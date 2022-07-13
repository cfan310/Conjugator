let buttonClick = document.getElementById("button1");

let conjugationsReveal = document.getElementById("conjugations");

function showConjugationsOnClick() {
  conjugationsReveal.style.display = "block";
  conjugationsReveal.innerHTML = "to put; to place";
}

buttonClick.addEventListener("click", showConjugationsOnClick);
