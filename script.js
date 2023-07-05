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
let lettersGuessed = [];

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
  return isCorrectGuess;
};

const processGuess = (letter) => {
  if (guessedLetter(letter)) {
    return;
  }

  guessedLetters.push(letter);

  const isCorrectGuess = updateHiddenWord(letter);

  if (isCorrectGuess) {
    console.log("Correct Guess!");
    if (checkWin()) {
      console.log("You win!");
    } else {
      console.log(`Word: ${hiddenWord.join(" ")}`);
    }
  } else {
    remainingGuesses--;
    console.log(`Incorrect Guess! You have ${remainingGuesses} guesses left.`);

    if (remainingGuesses === 0) {
      console.log("You lose!");
    }
  }
};

const startGame = () => {
  selectRandomWord();
  initializeHiddenWord();
  remainingGuesses = maxGuesses;
  guessedLetters = [];
};
