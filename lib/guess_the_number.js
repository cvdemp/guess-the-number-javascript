function userInput() {
  var userInputName = prompt("What is your name?")
  var guess = userGuess(userInputName);
  var theNumber = computerNumber();
  guessTheNumber(guess, theNumber);
}

function computerNumber() {
  generatedNumber = Math.floor((Math.random() * 100) + 1);
  return generatedNumber;
}

function userGuess(userInputName) {
  var userNumber = prompt("Guess a number " + userInputName + "!");
  return userNumber;
}

function guessTheNumber(userNumber, theNumber) {
  if (userNumber > theNumber) {
    alert("Your guess is too high!!!");
    var userNumber = prompt("Guess again");
    guessTheNumber(userNumber, generatedNumber);
  }
  else if (userNumber < theNumber) {
    alert("Your guess is tooo lowwwwwwww");
    var userNumber = prompt("guess again");
    guessTheNumber(userNumber, generatedNumber);
  }
  else {
    alert("You won!!!");
  }
}

userInput();
