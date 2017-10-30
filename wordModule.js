var letter = require('./letterModule.js');
function word(str){
  var word = str;
  this.word = wrd;
  this.letter = [];
  this.wordFound = false;


  this.getLetters = function(){
    for(var i = 0; i < this.word.length; i++){
      var newLetter = new Letter (this.word[i]);
      this.letter.push(newLetter);
    }
  };


  this.wasWordFound = function(){
    if(this.letters.every(function(letter){
      return letter.appear === true;
    })){
      this.wordFound = true;
      return true;
    }
  };

  this.wasLetterFound = function(guessedLetter){
    var outputTo
  }
}
