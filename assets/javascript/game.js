// GLOBALS
// Create the dicitonary
const dictionary = [
  'hamburger', 'cheeseburger', 'fries', 'taco', 'nuggets',
  'doughnut', 'coffee', 'milkshake', 'soda', 'knife'
];

// Create a letter bank of the alphabet to check valid guesses
const letterBank = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Choose a word from the dictionary (random)
var randomWordPicker = Math.floor(Math.random() * dictionary.length);
// Turn the chosen word into an array of lowercase letters
var activeWord = dictionary[randomWordPicker].toLowerCase().split('');
console.log('ACTIVE WORD IS: ' + activeWord)
var blankLetters = [];
var correctGuesses = [];
var incorrectGuesses = [];

// Display empty letters in #current-word-area from the length of the chosen word
var emptyLetters = function() {
  for (i = 0; i < activeWord.length; i++) {
    blankLetters.push('_');
    document.getElementById('current-word-area').innerHTML = blankLetters.join(' ');
  };
  return blankLetters;
}; 

console.log(activeWord);
console.log(emptyLetters());

// Main gameplay loop; Begin accepting player's guesses
// Start an event listener for keypress events; pass in the events to a function
document.addEventListener('keypress', function(event) {
  // instantiate a letter variable and change the keypress to a lowercase string of that letter
  var letter = String.fromCharCode(event.keyCode).toLowerCase();

  // Check that the player's guess exists in letterBank
  if (letterBank.indexOf(letter) > -1) {
    // If guess is incorrect, insert in incorrectGuesses array
    if (activeWord.indexOf(letter) === -1) {
      // If letter is not already in the incorrectGuesses, push it in
      if (incorrectGuesses.indexOf(letter) === -1) {
        incorrectGuesses.push(letter);
        incorrectGuesses.sort();
        document.getElementById("incorrect-guesses").innerHTML = incorrectGuesses.join(' ');
      }
      else {
        console.log(letter + " has already been guessed");
      }
    }
    // If guess is correct, insert in correctGuesses array
    else if (activeWord.indexOf(letter) > -1) {
      correctGuesses.splice(activeWord.indexOf(letter), 0, letter);
      console.log('correct: ' + correctGuesses);
      // This currently doesn't handle repeated letters in activeWord properly!
    }
  }  
  // If guess is incorrect, insert in incorrect letters array 
    // Only log the incorrect guess if it doesn't already exist in incorrectGuesses
      

}); // End main


