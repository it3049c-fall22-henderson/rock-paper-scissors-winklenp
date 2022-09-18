// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score-tally`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(score){
  scoreParagraph.textContent = score;
}

// updateGameHistoryUI
function updateGameHistoryUI(content){
  gameHistoryParagraph.textContent = content;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  game = new RockPaperScissors(userName.textContent);
  scoreParagraph.textContent = `${userName.textContent} v CPU`
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  play(userSelection);
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });