export function Game() {
  this.players = [];
  this.currentId = 0;
  this.currentPlayer = 1;
}

Game.prototype.assignId = function() {
  this.currentId += 1;
};

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
};