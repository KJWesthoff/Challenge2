// Assignment code here
var generatePassword = function () {
  // ask for length input and check it
  var pw_len = window.prompt(
    "Input length of new password, it must be between 8 and 128 chacaters"
  );
  
  console.log(typeof(pw_len));
  console.log(Number.isInteger(pw_len));


  // inline function to check pw length returns true ot false
  var valid_no = function(pw_len){
    
    return (pw_len.isInteger && 8 <= pw_len && pw_len <= 128);
  }
  
  // while not valid number keep asking 
  while (!valid_no(pw_len)){
    pw_len = window.prompt("Please choose a number between 8 and 128 chacaters"); 
  }

  

  
  var pw = "";

  var base_s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (i = 0; i < pw_len; i++) {
    var idx = Math.floor(Math.random() * base_s.length);
    pw += base_s[idx];
  }

  //console.log(/[^a-z]+/g, '')
  //console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));

  return pw;
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
