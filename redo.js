//Prompt the user for the password criteria
//--Password length between 8 and 128 characters
//--Upper, Lower, Symbols, Numbers
//confirm the input meets criteria
//generate password
//display password on page
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symList = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  ":",
  ";",
  "<",
  ">",
  "?",
  "/",
];
var upperList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function generatePassword() {
  var userInput = window.prompt(
    "Please enter a password length between 8 and 128 characters"
  );
  var passwordLength = userInput;
  var prePassword = [];
  var postPassword = "";

  if (isNaN(passwordLength)) {
      window.alert("Password must be a number between 8 and 128 characters");
    }
    else if (passwordLength >= 8 || passwordLength <= 128) {
    if (
      window.confirm(
        "Would you like the password to generate uppercase letters?"
      )
    ) {
      prePassword = prePassword.concat(upperList);
    }
    if (
      window.confirm(
        "Would you like the password to generate lowercase letters?"
      )
    ) {
      prePassword = prePassword.concat(lowerList);
    }
    if (window.confirm("Would you like the password to inlcude numbers?")) {
      prePassword = prePassword.concat(numList);
    }
    if (window.confirm("Would you like the password to include symbols?")) {
      prePassword = prePassword.concat(symList);
    }
    if (prePassword.length === 0) {
      window.alert("Please select at least one character type");
    } else {
      for (let i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * prePassword.length);
        postPassword += prePassword[random];
      }
    }
  } else {
    window.alert("Password must be between 8 and 128 characters");
  }
  passwordText.innerHTML = postPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
