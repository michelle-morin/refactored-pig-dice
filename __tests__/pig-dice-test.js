import { Game } from './../src/pig-dice.js';

describe('Game', () => {

  test('should correctly instantiate a game with no arguments', () => {
    var game = new Game();
    expect(game.players).toEqual([]);
    expect(game.currentId).toEqual(0);
    expect(game.currentPlayer).toEqual(1);
  });
});