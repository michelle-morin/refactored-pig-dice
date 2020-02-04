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

Game.prototype.findPlayer = function(id) {
  for (var i=0; i< this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.players[i];
      }
    }
  }
  return false;
};

Game.prototype.switchPlayers = function() {
  if (this.currentPlayer === 1) {
    this.currentPlayer = 2;
  } else if (this.currentPlayer === 2) {
    this.currentPlayer = 1;
  }
};