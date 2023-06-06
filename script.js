function generatePassword() {

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
  var specialCharacters = ["`", " ", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", "]", "{", ":", "?", ">", "<", "[", "]", ";", "'", ",", ".", "/", "-", "="];

  var passwordLen = window.prompt("How many characters? ");
  if (passwordLen > 7 && passwordLen < 129) {
  
  } else {
    return;
  }
  var uppercaseInput = window.confirm("Would you like uppercase characters?");
  var lowercaseInput = window.confirm("Would you like lowercase characters?");
  var numericInput = window.confirm("Would you like numeric characters?");
  var specialCharacterInput = window.confirm("Would you like special characters?");
  
  var validCharacters = [];

  if (uppercaseInput) {
    validCharacters.push(...uppercase);
  }
  if (lowercaseInput) {
    validCharacters.push(...lowercase);
  }
  if (numericInput) {
    validCharacters.push(...numeric);
  }
  if (specialCharacterInput) {
    validCharacters.push(...specialCharacters);
  }

  var finalPassword = [];
  for (var i = 0; i < passwordLen; i++) {
    var randomCharacter = Math.floor(Math.random() * validCharacters.length);
    var characterConversion = [validCharacters[randomCharacter]]
    finalPassword.push(...characterConversion);
  }
  var passwordString = finalPassword.join("");
  return passwordString;
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); 