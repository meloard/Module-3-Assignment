// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
    return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("Enter a password length between 8 and 128 characters")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Not a number")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length should be between 8 and 128 characters")
    return
  }

  var userNumbers = window.confirm("Would you like the password to contain numbers?")
  var userSymbols = window.confirm("Would you like the password to contain symbols?")
  var userUppercase = window.confirm("Would you like the password to contain uppercase letters?")
  var userLowercase = window.confirm("Would you like the password to contain lowercase letters?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ":", ";", "<", ">", "?", "/"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var optionsList = []

  if (userNumbers === true) {
    optionsList.push(numberList)
  }

  if (userSymbols === true) {
    optionsList.push(symbolList)
  }

  if (userUppercase === true) {
    optionsList.push(uppercaseList)
  }

  if (userLowercase === true) {
    optionsList.push(lowercaseList)
  }
  if (optionsList === 0) {
    optionsList.push(uppercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsList)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
  }

  return generatedPassword

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);