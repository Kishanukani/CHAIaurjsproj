// window.onload;
{
  console.log("Connected successfully!!");
  //   alert("Welcome");
}

let RandomNumber = parseInt(Math.random() * 10 + 1);
console.log(RandomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlotarray = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const Startover = document.querySelector(".resultParas");
const output = document.getElementById("output");
const p = document.createElement("p");

let previousguess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// function validateGuess
function validateGuess(guess) {
  // if(guess)
  // if NaN(guess)
  if (isNaN(guess)) {
    alert("Enter a valid number");
  }
  if (guess > 100) {
    alert("Enter number less then 100");
  }
  if (guess < 1) {
    alert("Enter number greater then 1");
  } else {
    previousguess.push(guess);
    if (numGuess === 5) {
      DisplayGuess(guess);
      DisplayMsg(`Random number is ${RandomNumber}`);
      endgame();
    } else {
      DisplayGuess(guess);
      checkGuess(guess);
    }
  }
  function checkGuess(guess) {
    if (guess === RandomNumber) {
      DisplayMsg(
        `You Guessed it corrct te Random number is ${RandomNumber} and the guessed number is ${guess}`
        // endgame();
      );
      endgame();
    } else if (guess < RandomNumber) {
      DisplayMsg("the guessed number is to low");
    } else if (guess > RandomNumber) {
      DisplayMsg("The guessed number is to high");
    }
  }

  function DisplayGuess(guess) {
    userInput.value = "";

    guessSlotarray.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${6 - numGuess}`;
  }

  function DisplayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

  // function endgame() {
  //   userInput.value = "";
  //   userInput.setAttribute("disabled", "");
  //   output.classList.add("button");
  //   output.innerHTML = `<h6 id='newGame'>Start New Game </h6>`;
  //   playGame = false;
  //   Startover.appendChild(output);
  //   newGame();
  // }
  function endgame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    // output.classList.add("button");
    p.classList.add("button");

    p.innerHTML = `<h2 id='newGame'>Start New Game </h2>`;
    playGame = false;
    Startover.appendChild(p);
    newGame();
  }

  function newGame() {
    const newgame = document.getElementById("newGame");
    newgame.addEventListener("click", function (e) {
      RandomNumber = parseInt(Math.random() * 10 + 1);
      previousguess = [];
      guessSlotarray.innerHTML = "";
      numGuess = 1;
      remaining.innerHTML = `${6 - numGuess}`;
      DisplayMsg(`New Game is Started`);
      userInput.removeAttribute("disabled");
      Startover.removeChild(p);
      playGame = true;
    });
  }
}
