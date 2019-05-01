//Back end logic here
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z']
var vowels = ['a', 'i', 'u', 'e', 'o']
var newWord;
var toPigLatin = function(inputText){
  inputText = inputText.toLowerCase();
  vowels.forEach(function(vowel){
    if (inputText.startsWith(vowel)) {
      newWord = inputText + 'way';
      console.log(newWord);
    }
  });
  consonants.forEach(function(consonant){
    if (inputText.startsWith(consonant)) {
        newWord = inputText + 'ay';
        console.log(newWord);
    }
  });
  if ((newWord.endsWith === 'ay') && (newWord.endsWith != 'way')){

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
