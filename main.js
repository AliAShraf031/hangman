// letters
const letters = "abcdefghijklmnopqrstuvwxyz";

const lettersArr = Array.from(letters);

containerLetters = document.querySelector(".letters");

lettersArr.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create letter
  let spanLetter = document.createTextNode(`${letter}`);

  // Add Class To Span
  span.className = "letters-box";

  // Add Letter To Span
  span.appendChild(spanLetter);

  // Add Span To Container
  containerLetters.appendChild(span);
});

// Add Game Object
const word = {
  programing: [
    "html",
    "css",
    "java script",
    "python",
    "php",
    "angular",
    "flutter",
  ],
  famous: ["albert einchtein", "magdy yaqoup", "will smith", "michael jackson"],
  cartoon: ["tom jerry", "spongebob", "konan", "toy story"],
  movie: ["whiplash", "la la land", "divergent", "intersteller"],
  countries: [
    "egypt",
    "ksa",
    "indian",
    "palestine",
    "qatar",
    "syria",
    "bahrain",
  ],
};

let allKeys = Object.keys(word);

// Choose Random Obj Index
let randomCategoryIndex = Math.floor(Math.random() * allKeys.length);

// Get Category Choosen
let randomCategory = allKeys[randomCategoryIndex];

// Add Category Name To Span
let letterSpan = document.querySelector(".category span");
letterSpan.innerHTML = randomCategory;

// Get key Choosen
let randomCategoryArr = word[randomCategory];

// Choose Random Word Index
let randomWordIndex = Math.floor(Math.random() * randomCategoryArr.length);

// Get Word Chossen
let randomWordValue = randomCategoryArr[randomWordIndex];

console.log(randomCategoryIndex);
console.log(randomCategory);
console.log(randomCategoryArr);
console.log(randomWordIndex);
console.log(randomWordValue);

let guessLetters = document.querySelector(".guess-letters");

let theDraw = document.querySelector(".hangman-draw");

let wrongAttemps = 0;

let choosenWord = Array.from(randomWordValue);
console.log(choosenWord);

choosenWord.forEach((letter) => {
  let emptySpan = document.createElement("span");

  if (letter === " ") {
    emptySpan.className = "with-space";
  }

  guessLetters.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".guess-letters span");

let sucessAudio = document.getElementById("sucess");
let failedAudio = document.getElementById("fail");

// Hide Letter Chossen
document.addEventListener("click", (e) => {
  let status = false;

  if (e.target.className === "letters-box") {
    e.target.classList.add("clicked");

    let clickedLetter = e.target.innerHTML;

    console.log(clickedLetter);

    choosenWord.forEach((wordletter, wordIndex) => {
      if (clickedLetter === wordletter) {
        status = true;

        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    if (status !== true) {
      wrongAttemps++;

      theDraw.classList.add(`wrong-${wrongAttemps}`);

      failedAudio.play();

      if (wrongAttemps === 10) {
        endGame();
        containerLetters.classList.add("finished");
      }
    } else {
      sucessAudio.play();
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let spann = document.createElement("span");
  let spanText = document.createTextNode(`'${randomWordValue}'`);
  let divText = document.createTextNode(`Game Over , The Word is   `);
  spann.appendChild(spanText);
  div.appendChild(divText);
  div.appendChild(spann);
  div.className = "popup";
  document.body.appendChild(div);
}
