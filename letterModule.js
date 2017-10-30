module.export.letter = function(str){
  this.letter = str;
  this.appear = false;
  this.renderLetter = function(){
    if(this.letter === " "){
      this.appear = true;
      return " ";
    }else if(this.appear === false){
      return "___";
    }
    else{
      return this.letter;
    }
  };
};
