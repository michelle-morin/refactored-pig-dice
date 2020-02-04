export function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  this.win = false;
}

Player.prototype.rollDice = function(game) {
  var diceRoll = Math.floor( Math.random() * 6) +1;
  if (diceRoll == 1) {
    this.turnScore = 0;
    this.endTurn(game);
  } else {
    this.turnScore += diceRoll;
  }
};

Player.prototype.endTurn = function(game) {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  if (this.totalScore >= 100) {
    this.win = true;
  }
  game.switchPlayers();
};