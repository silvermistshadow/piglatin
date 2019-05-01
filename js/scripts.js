//Back end logic here
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9']
const vowels = ['a', 'i', 'u', 'e', 'o']
var newWord;
var conContainer = [];
var vowelContainer = [];
var toPigLatin = function(inputText){
  inputText = inputText.toLowerCase();
  for (x=0; x < inputText.length; x++) {
    for (i=0; i<vowels.length; i++) {
      if (inputText.startsWith(vowel)) {
        newWord = inputText + 'way'
      }
      else {
        newWord = inputText + 'ay'
      }
    };
  };
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
