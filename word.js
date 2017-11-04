// require letters objects

var Letter = require('./letter.js');

function Word(wrd) {
  var that = this;
  //store the string:wrd
  this.word = wrd;
  // letter:objects
  this.letters = [];
  this.wordFound = false;

  this.getLets = function() {

    //pop collection above with new Letter objects
    for(var i = 0; i<that.word.length; i++){
      var newLetter = new Letter(that.word[i]);
      this.letters.push(newLetter);
    }
  };

  //found the current word
  this.didWeFindTheWord = function() {
    if(this.letters.every(function(lttr){
      return lttr.appear === true;
    })){
      this.wordFound = true;
      return true;
    }

  };

  this.checkIfLetterFound = function(guessedLetter) {
    var whatToReturn = 0;
    //iterates through each letter to see if matches the guessedletter
    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.appear = true;
        whatToReturn++;
      }
    })
    //if guessLetter matches Letter property, the letter object shows
    return whatToReturn;
  };

  this.wordRender = function() {
    var display = '';
    //render the word based on if letters are/arent found
    that.letters.forEach(function(lttr){
      var currentLetter = lttr.letterRender();
      display+= currentLetter;
    });

    return display;
  };
}

module.exports = Word;
