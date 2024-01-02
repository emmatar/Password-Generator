// Assignment Code
var generateBtn = document.querySelector("#generate");

// !!!--Main Working function to generate password--!!!
function generatePassword() {
  
  // Variables holding the values to generate password.
  var numbers = "0123456789".split('');
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');
  var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz".split('');
  var alphabetUppercase = alphabetLowercase.map((c) => c.toUpperCase());
  // var alphabetUppercase = alphabetLowercase.map(function(c) {c.toUpperCase()});
  var allCharacters = alphabetLowercase.concat(alphabetUppercase, specialCharacters, numbers);
   // var min/max related to character length requirements (used in IF statement below).
   var min = 8;   
   var max = 129;
  // 'userChoice' is the variable for the user input.
  var userChoice;
  userChoice = prompt("How many characters would you like the password to contain?");
  console.log(userChoice);

  // IF statement for password length requirements
  if (userChoice < min) {
    alert(`Password length must be atleast 8 characters`);
  } else if (userChoice >= min && userChoice <= max) {
    var specialChars = confirm('Click OK to confirm including special characters.'); 
    var lowerCase = confirm('Click OK to confirm including lowercase characters.');
    var upperCase = confirm('Click OK to confirm including uppercase characters.'); 
    var numeric = confirm('Click OK to confirm including numberic characters.'); 
    var characterTypes = 0;
    var array = [];

    if (specialChars) {
      characterTypes++;
    } 
    if (lowerCase) {
      characterTypes++;
      array.push(alphabetLowercase);
    }
    
    if (upperCase) {
      characterTypes++;
    }
    if (numeric) {
      characterTypes++;
    }
    if (!characterTypes) {
      alert('hey weird')
      return;
    } else if (characterTypes == 1) {
      console.log(array);
    }

    console.log(characterTypes);


    /* 
    modulo 
    User chooese yes for ONLY lower, upper, and numeric:
    User selected 10 (means max of 8 from one single array)
    math.random 1-8 (lowercase) Ex:5 lowercase
    math.random 1-4 (uppercase Ex:3 uppercase
    math.random 1-4 (uppercase Ex:3 uppercase.
    */

    if (specialChars) {
      confirm
    } else {
    }
  } else if (userChoice > max) {
    alert(`Password length must be less than 129 characters.`);
  } else {
    return;
  }
  
// ---------------------------------------------------------------------------------------------------------------------------------------
  // var index = Math.floor(Math.random() * specialCharacters.length);
  // var computerChoice = allCharacters[index];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
