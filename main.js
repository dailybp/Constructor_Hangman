var inquirer = require("inquirer");
var isLetter = require("is-letter");

var Word = require("./letterModule.js");
var Game = require("./gameModule.js");

//var hangmanDisplay = Game.newWord.hangman;

require('events').EventEmitter.prototype._maxListeners = 100;

var hangman = {
  wordBank: Game.newWord.wordList,
  guessesRemaining: 10,
  guessedLetters: [],
  display: 0,
  currentWord: null,
  startGame: function(){
    var that = this;

    if(this.guessedLetters.length > 0){
      this.guessedLetters = [];
    }

    inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Ready to Play?"}]).then(function(ans){
        if(answer.play){
          that.newGame();
        } else{
          console.log("Sorry you don't want to play with me :(");
        }
      })},

      newGame: function(){
        if(this.guessesRemaining === 10){
          this.guessesRemaining = 10;
        },
        keepPromptingUser: function(){
          var that = this;

          inquirer.prompt([{
            name: "chosenLtr",
            type: "input",
            message: "Choose a Letter: ",
            validate: function(value){
              if(isLetter(value)){
                return true;
              } else{
                return false;
              }
            }
          }]).then(function(ltr){
            var letterReturned = (ltr.chosenLtr).toUpperCase();

            var guessedAlready = false;
            for(var i = 0; i < that.guessedLetters.length; i++){
              if(letterReturned === that.guessedLetters[i]){
                guessedAlready = true;
              }
            }

            if(guessedAlready === false){
              that.guessedLetters.push(letterReturned);

              var found = that.currentWord.wasLetterFound(letterReturned);

              if(found === 0){
                console.log('No, try again!');

                that.guessesRemaining --;
                that.display ++;
                console.log("Guesses remaining: " + that.guessesRemaining);
                console.log(hangmanDisplay[(that.display) - 1]);

                console.log("\n*********************************");
                console.log(that.currentWord.wordRender());
                console.log("\n*********************************");

                console.log("Letters guessed: " + that.guessedLetters);
              } else{
                console.log("Yes, you guessed correctly!");

                if(that.currentWord.wasWordFound() === true){
                  console.log(that.currentWord.wordRender());
                  console.log("Congratulations!!! You won the game!");
                } else{
                  console.log("Guesses remaining: " + that.guessesRemaining);
                  console.log(that.currentWord.wordRender());
                  console.log("\n*********************************");
                  console.log("Letters guessed: " + that.guessedLetters());
                }
              }
            }
              if(that.guessesRemaining > 0 && that.currentWord.wordFound === false){
                that.keepPromptingUser();
              } else if(that.guessesRemaining === 0){
                console.log("Game Over Man! Game Over");
                console.log("The action hero you were guessing was: " + that.currentWord.word);
              } else {
                console.log("You've guessed that letter already, please try again.");
                that.keepPromptingUser();
              }
          });
        }
      }
    }
hangman.startGame();
