// GLOBALS
// Create the dicitonary
var dictionary = ['hamburger', 'cheeseburger', 'fries', 'milkshake', 'soda', 'knife'];
// Create a letter bank of the alphabet to check valid guesses
var letterBank = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

// Choose a word from the dictionary (random)
var randomWordPicker = Math.floor(Math.random() * dictionary.length);
// Turn the chosen word into an array
var activeWord = dictionary[randomWordPicker].split('');
console.log('ACTIVE WORD IS: ' + activeWord)
var underscores = [];
var correctLetters = [];
var incorrectLetters = [];

// Display empty letters in #current-word-area from the length of the chosen word
var emptyLetters = function() {
  for (i = 0; i < activeWord.length; i++) {
    underscores.push('_');
    document.getElementById('current-word-area').innerHTML = underscores.join(' ');
  };
  return underscores;
}; 

console.log(activeWord);
console.log(emptyLetters());

// Main gameplay loop; Begin accepting player's guesses
// Start an event listener for keypress events; pass in the events to a function
document.addEventListener('keypress', function(event) {
  // instantiate a letter variable and change the keypress to a lowercase string of that letter
  var letter = String.fromCharCode(event.keyCode).toLowerCase();

  // Check that the player's guess exists in letterBank

  // If guess is correct, push to correct letters array
  if (activeWord.indexOf(letter) > -1) {
    correctLetters.push(letter);
    console.log('correct: ' + correctLetters);
  }
 // If guess is incorrect, push to incorrect letters array 
  else {
    incorrectLetters.push(letter);
    console.log('incorrect: ' + incorrectLetters);
  }
});


