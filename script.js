const randomWords = [
  "Elephant",
  "Candle",
  "Guitar",
  "Sunshine",
  "Mountain",
  "Chocolate",
  "Ocean",
  "Bicycle",
  "Rainbow",
  "Pillow",
  "Butterfly",
  "Symphony",
  "Fireworks",
  "Moonlight",
  "Camera",
  "Serenade",
  "Tornado",
  "Waterfall",
  "Feather",
  "Carousel",
  "Starfish",
  "Galaxy",
  "Pineapple",
  "Adventure",
  "Castle",
  "Squirrel",
  "Sunrise",
  "Velvet",
  "Thunderstorm",
  "Carousel",
  "Whistle",
  "Champagne",
  "Treasure",
  "Peacock",
  "Sandcastle",
  "Lemonade",
  "Whisper",
  "Hiking",
  "Hot air balloon",
  "Jellyfish",
  "Symphony",
  "Wanderlust",
  "Enchanting",
  "Harvest",
  "Bubblegum",
  "Radiant",
  "Harmony",
  "Lantern",
  "Whiskers",
  "Firefly",
];

let chosenWord = "";
let hiddenWord = "";
let maxGuesses = 6;
let guessedLetters = [];
let remainingGuesses = maxGuesses;
let totalWins = 0;
let totalLosses = 0;
let timerInterval;

const text = document.getElementById("word");
const wrong= document.getElementById("wrong");
const letters = document.getElementById("letters");
const startButton = document.getElementById("start-button");
const guessButton = document.getElementById("guess-button");
const guessInput = document.getElementById("guess");
const gameOverText = document.getElementById("game-over-text");

const selectRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * randomWords.length);
  chosenWord = randomWords[randomIndex];
};

const initializeHiddenWord = () => {
  hiddenWord = chosenWord.split("").map(() => "_");
};

const updateHiddenWord = (letter) => {
  let isCorrectGuess = false;

  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i].toLowerCase() === letter.toLowerCase()) {
      hiddenWord[i] = chosenWord[i];
      isCorrectGuess = true;
    }
  }
  text.textContent = hiddenWord.join(" ");
  return isCorrectGuess;
};

const checkWin = () => {
  return hiddenWord.join("") === chosenWord;
};

const guessedLetter = (letter) => {
  return guessedLetters.includes(letter);
};

const processGuess = () => {
  const letter = guessInput.value;
  if (guessedLetter(letter)) {
    return;
  }

  guessedLetters.push(letter);

  const isCorrectGuess = updateHiddenWord(letter);

  if (isCorrectGuess) {
    if (checkWin()) {
      text.textContent = "You win!";
      totalWins++;
      gameOverText.textContent = `Total Wins: ${totalWins}, Total Losses: ${totalLosses}`;
      clearInterval(timerInterval);
    }
  } else {
    remainingGuesses--;
    wrong.textContent = `Incorrect Guess! You have ${remainingGuesses} guesses left.`;

    if (remainingGuesses === 0) {
      text.textContent = "You lose!";
      totalLosses++;
      gameOverText.textContent = `Total Wins: ${totalWins}, Total Losses: ${totalLosses}`;
      clearInterval(timerInterval);
    }
  }
  letters.textContent = `Letters Guessed: ${guessedLetters.join(", ")}`;
  guessInput.value = "";
};

const startGame = () => {
  selectRandomWord();
  initializeHiddenWord();
  remainingGuesses = maxGuesses;
  guessedLetters = [];
  text.textContent = hiddenWord.join(" ");
  letters.textContent = "Letters Guessed:";
  gameOverText.textContent = "";
  guessInput.value = "";
  document.getElementById("time").textContent = "0";

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const timeElement = document.getElementById("time");
    let time = parseInt(timeElement.textContent);
    time++;
    timeElement.textContent = time.toString();
  }, 1000);
};

startButton.addEventListener("click", startGame);
guessButton.addEventListener("click", processGuess);