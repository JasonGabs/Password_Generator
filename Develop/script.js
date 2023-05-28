// Assignment code here


function generatePassword() {

  prompt("How many characters?");
  prompt("Would you like uppercase characters?");
  prompt("Would you like lowercase characters?");
  prompt("Would you like numeric characters?");
  prompt("Would you like special characters?");
};

// generatePassword();
// password.Math.random();
// console.log(password);

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