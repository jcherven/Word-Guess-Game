// Global Variables
const dictionary = [
    'hamburger', 'cheeseburger', 'fries', 'taco', 'nuggets',
    'doughnut', 'coffee', 'milkshake', 'soda', 'knife'
];
//const dictionary = ['bb'];
const letterBank = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var activeWordString;
var activeWordArray;
var activeWordDisplay = [];
var playerGuess;
var playerGuessState = 0;
var incorrectGuesses = [];
// Current game state. 0 = gamplay loop is active. 1 = win state. 2 = lose state.
var gameState = 0;

// Main Game Logic
initGameEnvironment();
// Capture user input
document.onkeyup = function(event) {
    var playerInput = event.key.toLowerCase();
    playerGuessState = validateInput(playerInput, letterBank);
    if ( playerGuessState === 0 )
        gameState = checkPlayerGuess(playerGuess);
    if ( gameState === 1 || gameState === 2 )
        initGameEnvironment();
}; // End input capture
// End main game logic

/****************************************************
 *              Funtion Definitions
 ***************************************************/

/* `initGameEnvironment()` 
 * Writes the currently active word to guess into the active-content-area element. Sets all variables.
 * Returns nothing.
 * Accepts:
 *     `word` (word to be replaced with underscores)
 *     `display` (array of underscores for each letter of `word`)
*/
function initGameEnvironment() {
    activeWordString = pickWordFrom(dictionary);
    console.log('activeWordString: ' + activeWordString)
    activeWordArray = activeWordString.split('');
    activeWordDisplay = [];
    playerGuess = null;
    playerGuessState = 0;
    incorrectGuesses = [];
    gameState = 0;
    for ( i=0; i < activeWordString.length; i++ ) 
        activeWordDisplay.push('_');
    document.getElementById('active-word-area').innerHTML = activeWordDisplay.join(' ');
    document.getElementById('missed-letters').innerHTML = incorrectGuesses.join(' ');
} // End `initGameEnvironment()`

/**`pickWordFrom()`
 * Picks a word from the passed in array.
 * Returns:
 *      A word
 * Accepts:
 *      `wordBank` (list of words; array variable)
 */
function pickWordFrom(wordBank) {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
} // End `pickWordFrom()`

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
    if ( validList.includes(keyboardInput) ) {
        playerGuess = keyboardInput;
        return 0;
    }
    else
        return 1;
} // End `validateInput()`

/**`checkPlayerGuess()`
 * Checks if the passed letter is in the activeWord, passes to insertCorrectGuess or insertIncorrectGuess. Sets the current game state.
 * Accepts:
 *      a letter
 * Returns:
 *      0 if win or loss state is not returned from insertIncorrectGuess or insertCorrectGuess.
 *      1 if in win state
 *      2 if in lose state
 */
function checkPlayerGuess(letter) {
    if (activeWordString.includes(letter) ) {
        if ( insertCorrectGuess(letter) === 1 )
            // Return win state
            return 1;
    }
    else
        if ( insertIncorrectGuess(letter) === 1 ) 
            // Return lose state
            return 2;
        else
            return 0;
} // End `checkPlayerGuess()`

/**`insertIncorrectGuess()`
 * Handles an incorrect guess from checkPlayerGuess and keeps track of the number of missed letters. Checks for lose state.
 * Accepts:
 *      a letter
 * Returns:
 *      1 if player is out of misses
 */
function insertIncorrectGuess(incorrectletter) {
    playerGuess = incorrectletter;
    incorrectGuesses.push(incorrectletter);
    incorrectGuesses.sort();
    document.getElementById('misses').innerText = incorrectGuesses.length;
    if (incorrectGuesses.length < 9 ) {
        document.getElementById('missed-letters').innerHTML = incorrectGuesses.join(' ');
        return 0;
    }
    else {
        document.getElementById('missed-letters').innerHTML = incorrectGuesses.join(' ');
        return 1;
    }
} // End `insertIncorrectGuess()`

/**`insertCorrectGuesses()`
 * Handles a correct guess from checkPlayerGuess. Checks for win state.
 *      a letter
 * Returns:
 *      1 if the word is complete (win state)
 */
function insertCorrectGuess(letter) {
    playerGuess = letter;
    // compare letter to each item of activeWord, replace the same index of activeWordDisplay
    for ( i=0; i < activeWordArray.length; i++ ) {
        if ( activeWordArray[i] === letter ) {
            activeWordDisplay[i] = letter;
            document.getElementById('active-word-area').innerHTML = activeWordDisplay.join(' ');
        }
    }
    if ( activeWordDisplay.includes('_') )
        return 0;
    else
        return 1;
} // End `insertCorrectGuess()`









/***********DEBUG MESSAGES******** */
function debugLog() {
    document.getElementById('active-word').innerHTML = 'active word: ' + activeWordString;
    document.getElementById('correct').innerHTML = 'activeWordDisplay: ' + activeWordDisplay;
    document.getElementById('player-guess').innerHTML = 'playerGuess: ' + playerGuess;
}