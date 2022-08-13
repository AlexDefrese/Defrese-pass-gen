// Assignment code here
var characterLength = 8;
var choiceArr = [];

var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
// should generate password based on user input
}

function userInput() {
    characterLength = parseInt(window.prompt("How long would you like your password to be? Please choose between 8-128 characters."));

    // ensure user answer is valid
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      window.alert("Please choose a character length betwee 8-128 characters. Thank you.");
      return false;
    }
// adds lowercase letters to choice array
    if (window.confirm("Would you like lower case letters in your password?")){ 
        choiceArr = choiceArr.concat(lowerCase);
    }
    // adds uppercase letters to choice array
    if (window.confirm("Would you like upper case letters in your password?")){ 
        choiceArr = choiceArr.concat(upperCase);
    }
    // adds numbers to choice array
    if (window.confirm("Would you like numbers in your password?")){ 
      choiceArr = choiceArr.concat(numbers);
  }
  // adds special characters to choice array
    if (window.confirm("Would you like special characters (!,@,#,$,%,^,&...) in your password?")){ 
    choiceArr = choiceArr.concat(specialChar);
}
}