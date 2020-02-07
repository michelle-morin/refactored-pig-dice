import $ from 'jquery';

export function showPlayerScore(playerId, turnScore, playerScore) {
  $(".player" + playerId + "TurnScore").html(turnScore);
  $(".player" + playerId + "Total").html(playerScore);
}

export function showDiceRoll(playerId, roll, game) {
  var player = game.findPlayer(playerId);
  $(".player" + player.id + "Roll").html(roll);
}

export function removeTurnScore(id) {
  $(".player" + id + "TurnScore").html("0");
}
