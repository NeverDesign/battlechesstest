// Imports
import Game from "./Game.js";

// Initialization
console.log('App: Initialized');

let game = new Game();

// Start Game
game.generateTiles();
game.generatePieces(); 

game.testMove();

// game.exportGameData(); // TODO: Delete this

