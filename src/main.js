import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function showPlayerScore(playerId, turnScore, playerScore) {
  $(".player" + playerId + "TurnScore").html(turnScore);
  $(".player" + playerId + "Total").html(playerScore);
};

export function showDiceRoll(playerId, roll, game) {
  var player = game.findPlayer(playerId);
  $(".player" + player.id + "Roll").html(roll);
};

export function removeTurnScore(id) {
  $(".player" + id + "TurnScore").html("0");
};

$(document).ready(function() {
  $("button#start-play").click(function(event) {
    event.preventDefault();
    var player1Name = $("input#player1Name").val();
    var player2Name = $("input#player2Name").val();

    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);
    game.addPlayer(player1);
    game.addPlayer(player2);
    $("#initialScreen").hide();
    $("#gameScreen").show();
    $("#name1").html(player1Name);
    $("#name2").html(player2Name);

    $("button#roll").click(function(event){
      event.preventDefault();
      var playerRolling = game.findPlayer(game.currentPlayer);
      playerRolling.rollDice(game);
    });

    $("button#hold").click(function(event) {
      event.preventDefault();
      playerRolling.endTurn(game);
    });
  });
});