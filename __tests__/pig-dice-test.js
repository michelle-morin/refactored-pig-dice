import { Game } from '../src/game.js';
import { Player } from '../src/player.js';

describe('Game', () => {

  test('should correctly instantiate a game with no arguments', () => {
    var game = new Game();
    expect(game.players).toEqual([]);
    expect(game.currentId).toEqual(0);
    expect(game.currentPlayer).toEqual(1);
  });
});

describe ('Player', () => {

  test('should correctly make two player objects', () => {
    var player1 = new Player("Michelle");
    var player2 = new Player("Brandan");
    expect(player1.name).toEqual("Michelle");
    expect(player2.name).toEqual("Brandan");
  });

  // test('should return random number when user rolls dice', () => {
  //   var player1 = new Player("Michelle");
  //   player1.rollDice();
  //   expect(player1.turnScore).toBeGreaterThan(0);
  // })

  test('should change turnscore to 0 when user rolls 1', () => {
    var player1 = new Player("Brandan");
    player1.rollDice();
    expect(player1.turnScore).toEqual(0);
  }) 
});