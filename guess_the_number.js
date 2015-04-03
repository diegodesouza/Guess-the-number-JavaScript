var correctNumber = Math.floor(Math.random() * 101);

while (yourGuess !== correctNumber) {
  var yourGuess = prompt("Guess a number between 0 and 100");
  if (yourGuess < correctNumber) {
    alert("You guessed too low");
  } else if (yourGuess > correctNumber) {
    alert("You guessed too high");
  } else {
    alert("You got it");
    break
  }
}
