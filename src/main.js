import { Game } from '../src/game.js';
import { Player } from '../src/player.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("button#start-play").click(function(event) {
    event.preventDefault();
    var game = new Game();
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
      var playerRolling = game.findPlayer(game.currentPlayer);
      playerRolling.endTurn(game);
    });
  });
});