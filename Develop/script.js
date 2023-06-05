// Assignment code here
var passwordLen;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", "]", "{", ":", "?", ">", "<", "[", "]", ";", "'", ",", ".", "/", "-", "="]

function generatePassword() {

  passwordLen = window.prompt("How many characters? ");
  if (passwordLen < 8 || passwordLen > 128) {
    return;
  }
  var uppercaseInput = window.confirm("Would you like uppercase characters?");
  var lowercaseInput = window.confirm("Would you like lowercase characters?");
  var numericInput = window.confirm("Would you like numeric characters?");
  var specialCharacterInput = window.confirm("Would you like special characters?");
  
  var validCharacters = [];

  if (uppercaseInput) {
    validCharacters.concat(uppercase);
  }
  if (lowercaseInput) {
    validCharacters.concat(lowercase);
  }
  if (numericInput) {
    validCharacters.concat(numeric);
  }
  if (specialCharacterInput) {
    validCharacters.concat(specialCharacters);
  }

  for (var i = 0; i < passwordLen; i++) {
    var randomCharacter = Math.floor(Math.random() * .length);
    
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 




// This project is about creating a password generator. The majority of the HTML has been done for you, all you have to do is fill in the actual generator.

// When the generate button is clicked, show the user the a series of prompts asking them for critieria. You will want to ask the following questions (it's recommended you use a confirm dialog unless otherwise specified):
// What length do they want? (It's recommended you use a prompt for this)
// Do they want uppercase letters?
// Do they want lowercase letters?
// Do they want numeric characters?
// Do they want special characters?
// If the user inputs invalid data (must select at least one character type, length must be between 8 and 128), then repeat the popups until they select correct data.
// Once the criteria are selected, then use a random number generator to generate the new password and place it in the given space in the HTML. There are a number of ways to do this, the instructional staff can help with hints on this if you need.