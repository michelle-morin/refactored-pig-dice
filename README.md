# _Pig Dice_

#### _Unit Testing Practice for Epicodus_, _4 Feb. 2020_

#### By _**Michelle Morin, Brandan Sayarath**_

## Description

_This webpage allows two players to play pig dice. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":_
* _If the player rolls a 1, they score nothing and it becomes the next player's turn._
* _If the player rolls any other number, it is added to their turn total and the player's turn continues._
* _If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn._

## Specifications:


| Specification | Example Input | Example Output |
| ------------- |:-------------:| --------------:|
| Webpage instantiates new game | user opens webpage | var game = new Game(); |
| Webpage creates two player objects | user inputs name | player 1 {}, player 2 {} |
| Webpage adds two players objects to game object array | users enter names | game.players = [player1, player2] |
| Webpage generates random number between 1 and 6 when user clicks "roll" button | click | 4 |
| Webpage changes turn score to 0 if user rolls 1 | 1 | turn score: 0 |
| Webpage allows user to roll multiple times, and sums the scores from each roll as a turn score | 4, 5 | 9 |
| Webpage switches to other user's turn if user rolls 1 | 1 | turn score: 0, other user's roll |
| Webpage adds turn score to total score when user clicks "hold" button | hold | turn score: 0, score: prior score + turn score |
| Webpage alerts user when user reaches score of 100 | total score: 100 | *confetti* |

## Setup/Installation Requirements

* _First, clone this repository to your desktop by navigating to the desktop in the Terminal (entering "cd desktop" in the Terminal) and then entering "git clone" followed by the url to this repository._
* _Once the project directory is cloned to your desktop, navigate to the directory in the terminal by entering "cd" followed by the name of this repository in the Terminal._
* _Confirm that you have navigated to the project directory by entering "pwd" in the Terminal._
* _Once you have navigated to the directory in the terminal, open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal)._
* _Open index.html in a browser of your choice (e.g., Google Chrome)._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin, Brandan Sayarath_**