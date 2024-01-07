// Assignment Code
var generateBtn = document.querySelector("#generate");
// !!!--Main Working function to generate password--!!!
function generatePassword() {
  // Variables holding the values to generate password.
  var numbers = "0123456789".split('');
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('');
  var uppercaseCharacters = lowercaseCharacters.map((c) => c.toUpperCase());
  // var alphabetUppercase = alphabetLowercase.map(function(c) {c.toUpperCase()});
  var allCharacters = lowercaseCharacters.concat(uppercaseCharacters, specialCharacters, numbers);
   // var min/max related to character length requirements (used in IF statement below).
  var min = 8;   
  var max = 129;
  // 'userChoice' is the variable for the user input.
  var userChoice;
  // prompt retrieves value of user answer input
  userChoice = prompt("How many characters would you like the password to contain?");
  // IF statement for password length requirements
  if (userChoice === null) {
    location.reload();
  } else if (userChoice < min) {
    alert(`Password length must be at least 8 characters.`);
    generatePassword();
  } else if (userChoice >= min && userChoice <= max) {
    var specialChars = confirm('Click OK to confirm including special characters.'); //1st Qestion 
    var lowerCase = confirm('Click OK to confirm including lowercase characters.'); //2nd Qestion
    var upperCase = confirm('Click OK to confirm including uppercase characters.'); //3rd Qestion
    var numeric = confirm('Click OK to confirm including numberic characters.'); //4th Qestion
    var array = [];
    if (specialChars) {
      array = array.concat(specialCharacters);
      } 
      if (lowerCase) {
      array = array.concat(lowercaseCharacters);
      }
      if (upperCase) {
        array = array.concat(uppercaseCharacters);
      }
      if (numeric) {
        array = array.concat(numbers);
    }  
    var output = [];
    for (var i = 0; i < userChoice; i++) {
    var index = Math.floor(Math.random() * array.length);//1
    var trueValue = array[index];//b
    output.push(trueValue);
    }
    return output.join("");
  } 
  else {
    alert(`Password length must be less than 129 characters`);
    generatePassword();
  } 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();//what is returned from genPassword = value of var password
  var passwordText = document.querySelector("#password");
  // .value key word applies to <textarea> and <input> tags to grab or display a value via html
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);