//Back end logic here
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z']
var vowels = ['a', 'i', 'u', 'e', 'o']
var toPigLatin = function(inputText){
  if (inputText.startsWith('a' || 'i' || 'u' || 'e' || 'o')) {
    var newWord = inputText + "way"
  }

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
