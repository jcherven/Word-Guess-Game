// Global Variables
const dictionary = [
    'hamburger', 'cheeseburger', 'fries', 'taco', 'nuggets',
    'doughnut', 'coffee', 'milkshake', 'soda', 'knife'
];
const letterBank = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var activeWord = pickWordFrom(dictionary);
var activeWordDisplay = [];
var playerGuess;
var incorrectGuesses = [];

// Main Game Logic
initActiveWord(activeWord, activeWordDisplay);
// Capture user input
captureNextKeyPress();
/*
document.onkeyup = function(event) {
    // Set a playerInput variable to lower case letter
    var playerInput = String.fromCharCode(event.keyCode).toLowerCase();
    // Validate the global `playerGuess` against the letterBank array
    playerGuess = validateInput(playerInput, letterBank);
    if ( playerGuess === 1 )
        insertIncorrectGuess();
    else
        insertCorrectGuess(playerGuess);

}; // End input capture
*/

/****************************************************
 *              Funtion Definitions
 ***************************************************/

function insertIncorrectGuess() {
    console.log(playerGuess);
}
function insertCorrectGuess() {
    console.log(playerGuess);
}

/**`captureNextKeyPress()`
 * Waits and processes player guesses from the keyboard.
 * Returns:
 *      a letter     
 * Accepts:
 *      nothing
 */
function captureNextKeyPress() {
    // Capture user input
    document.onkeyup = function(event) {
        // Set a playerInput variable to lower case letter
        var playerInput = String.fromCharCode(event.keyCode).toLowerCase();
        // Validate the global `playerGuess` against the letterBank array
        playerGuess = validateInput(playerInput, letterBank);
        console.log(playerGuess);
    }; // End input capture
}

/* `initActiveWord()` 
 * Writes the currently active word to guess into the active-content-area element.
 * Returns an array of underscores for each letter.
 * Accepts:
 *     `word` (word to be replaced with underscores)
 *     `display` (array of underscores for each letter of `word`)
*/
function initActiveWord(word, display) {
    for ( i=0; i < word.length; i++ ) 
        display.push('_');
    document.getElementById('active-word-area').innerHTML = display.join(' ');
    return display;
}

/**`pickWordFrom()
 * Picks a word from the passed in array.
 * Returns:
 *      A word
 * Accepts:
 *      `wordBank` (list of words; array variable)
 */
function pickWordFrom(wordBank) {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}

/**`validateInput()`
 * Checks player input against an array of valid characters.
 * Returns:
 *      valid input character OR
 *      1 for invalid input
 * Accepts:
 *      `playerInput` (captured from a keycode event)
 *      `validList` (array of valid inputs)
 */
function validateInput(keyboardInput, validList) {
    if ( validList.includes(keyboardInput) )
        return keyboardInput;
    else
        return 1;
}





/***********DEBUG MESSAGES******** */
function debugLog () {
console.log('active word chosen: ' + activeWord);
console.log('activeWordDisplay = ' + activeWordDisplay);
console.log('playerGuess is currently: ' + playerGuess);
}