import { Game } from '../src/game.js';
import { Player } from '../src/player.js';

describe('Game', () => {
  var game;
  beforeEach(() => {
    game = new Game();
  });

  test('should correctly instantiate a game with no arguments', () => {
    expect(game.players).toEqual([]);
    expect(game.currentId).toEqual(0);
    expect(game.currentPlayer).toEqual(1);
  });

  test('should add two player objects to game object', () => {
    var player1 = new Player("Brandan");
    var player2 = new Player("Michelle");
    game.addPlayer(player1);
    game.addPlayer(player2);
    expect([player1, player2]).toEqual(expect.arrayContaining(game.players));
  });

  test('should switch to other player turn when player rolls 1', () => {
    var player1 = new Player();
    player1.rollDice(game, 1);
    expect(game.currentPlayer).toEqual(2);
  });
});

describe ('Player', () => {
  var game;
  var player1;
  var player2;
  beforeEach(() => {
    game = new Game();
    player1 = new Player("Michelle");
    player2 = new Player("Brandan");
  });

  test('should correctly make two player objects', () => {
    expect(player1.name).toEqual("Michelle");
    expect(player2.name).toEqual("Brandan");
  });

  test('should add user turn score to total score at end of turn', () => {
    player1.rollDice(game);
    player1.endTurn(game);
    expect(player1.totalScore).toBeGreaterThan(0);
  });

  test('should update player winning property to true if player score is greater than or equal to 100', () => {
    player1.totalScore = 100;
    player1.endTurn(game);
    expect(player1.win).toEqual(true);
  });

  test('should return random number when user rolls dice', () => {
    player1.rollDice(game);
    expect(player1.turnScore).toBeGreaterThan(0);
  });

  test('should change turnscore to 0 when user rolls 1', () => {
    player1.rollDice(game);
    expect(player1.turnScore).toEqual(0);
  });
});