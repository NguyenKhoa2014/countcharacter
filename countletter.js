function countLetters(input){
  var characterCount = {};
  for(var i = 0; i < input.length; i++){
    var character = input.charAt(i);
    if (character != ' '){
      if (characterCount[character]){
        characterCount[character]++;
      } else {
        characterCount[character] = 1;
      }
    }
 

   // console.log(character);
  }
  console.log(characterCount)
}

countLetters('lighthouse in the house');