//Back end logic here
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9']
const vowels = ['a', 'i', 'u', 'e', 'o']
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z']
var swapArray = [];
var finalWord = [];
var foundIt =[];
var toPigLatin = function(inputText){
  inputText = inputText.toLowerCase();
  var newWord = inputText.split("");
  for (var x=0; x < newWord.length; x++) {
    for (var i=0; i<vowels.length; i++) {
      if (newWord[x] === vowels[i]){
        if (x===0){
          finalWord = newWord.join('')+'way';
          console.log(finalWord)
        }
        else {
          foundIt = newWord.slice(x);
          swapArray = newWord.slice(0, x);
          finalWord = foundIt.join("")+swapArray.join("")+"ay";
          x = vowels.length;
          i = newWord.length;
          console.log(finalWord);
        }
      }
      else {
        swapArray.push(newWord[i]);
      }


    };
  };
  return finalWord;
};




//user interface begins
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var inputText = $("input#input").val();
    var outputText = toPigLatin(inputText);
    $("#output").text(outputText);
    $("#output").show();
  });


});
