// Assignment Code
var generateBtn = document.querySelector("#generate");


// !!!--Main Working function to generate password--!!!
function generatePassword() {
  
  // Variables holding the values to generate password.
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');
  var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz".split('');
  var alphabetUppercase = alphabetLowercase.map((c) => c.toUpperCase());
  var allCharacters = alphabetLowercase.concat(alphabetUppercase, specialCharacters);


// ----------------------After the "var userChoice" message prompts, i cant get the IF statment to execute alerts for any condition.---------------------------

  // 'userChoice' is the variable for the user input.
  var userChoice = generateBtn.onclick = function() {
    prompt("How many characters would you like the password to contain?");
  } 
  // var min/max related to character length requirements (used in IF statement below).
  var min = 8;   
  var max = 129;
  if (userChoice < min) {
    alert(`Password length must be atleast 8 characters`);
  } else if (userChoice >= min && userChoice <= max) {
    alert('Click OK to confirm including special characters.'); 
  } else if (userChoice > max) {
    alert(`Password length must be less than 129 characters.`);
  } 

// ---------------------------------------------------------------------------------------------------------------------------------------


  // // characterMin() and characterMax() functions set min/max character requirements.
  // function characterMin() {
  //   if (userChoice < min) {
  //     alert(`Password length must be atleast 8 characters.`);
  //   }
  // } 
  // function characterMax() {
  //   if (userChoice > max) {
  //     alert(`Password length must be less than 129 characters.`);
  //   }
  // } 
  // var index = Math.floor(Math.random() * allCharacters.length);

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
