export function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDice = function() {
  var diceRoll = Math.floor( Math.random() * 6) +1;
  // var diceRoll = 1;
  if (diceRoll == 1) {
    this.turnScore = 0;
    endTurn(this.id);
  } else {
    this.turnScore += diceRoll;
  }
};

Player.prototype.endTurn = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};