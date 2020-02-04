export function Game() {
  this.players = [];
  this.currentId = 0;
  this.currentPlayer = 1;
}

export function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}