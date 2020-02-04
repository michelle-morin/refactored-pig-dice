import { showPlayerScore, showDiceRoll, removeTurnScore } from './main.js';

export function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  this.win = false;
}

Player.prototype.rollDice = function(game, num = null) {
  if (!num) {
    var diceRoll = Math.floor( Math.random() * 6) +1;
  } else {
    diceRoll = num;
  }
  if (diceRoll == 1) {
    this.turnScore = 0;
    showDiceRoll(this.id, diceRoll, game);
    this.endTurn(game);
  } else if (diceRoll != 1) {
    this.turnScore += diceRoll;
    showDiceRoll(this.id, diceRoll, game);
  }
  showPlayerScore(this.id, this.turnScore, this.totalScore);
};

Player.prototype.endTurn = function(game) {
  this.totalScore += this.turnScore;
  showPlayerScore(this.id, this.turnScore, this.totalScore);
  this.turnScore = 0;
  if (this.totalScore >= 100) {
    this.win = true;
  }
  game.switchPlayers();
  removeTurnScore(this.id);
  this.checkWin();
};

Player.prototype.checkWin = function() {
  if (this.win === true) {
    alert(this.name + " wins!");
  }
};