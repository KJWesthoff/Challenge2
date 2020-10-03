// Assignment code here
var generatePassword = function () {
  // ------------------------------------------
  // ask for length and check input is a number
  // -------------------------------------------
  var pw_len = window.prompt(
    "Input length of new password, it must be between 8 and 128 chacaters"
  );
  
  pw_len = parseInt(pw_len);

  // inline function to check pw length, returns bool
  var valid_no = function(pw_len){  
    return (!isNaN(pw_len) && 8 <= pw_len && pw_len <= 128);
  }
  
  // while not valid number keep asking 
  while (!valid_no(pw_len)){
    pw_len = window.prompt("Please choose a number between 8 and 128 chacaters"); 
  }

  //-----------------------
  // Ask user for charcters
  //-----------------------
  
  // inline function to remove repeated characters
  // if last index = index then the character is unique

  var del_repeated_char = function(str){
    var res_str  = "";  
    for(var i = 0 ; i < str.length; i++){
      //debugger;
      if (str.lastIndexOf(str[i]) === i){
        //console.log(str[i]);
        res_str += str[i];
      }
    }
    //console.log(res_str);
    return res_str;
  }

  // Initialize a string of characters to use for the pw (base_s).
  var base_s = "";
  

  // User selects lowercase, uppercase, numeric, and/or special characters
  var enough = false;
    while(!enough){

      if (window.confirm("Include lowercase a-z?")){
        base_s += "abcdefghijklmnopqrstuvwxyz";
      }

      if (window.confirm("Include Uppercase A-Z?")){
        base_s += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      if (window.confirm("Include Numbers 0-9?")){
        base_s += "0123456789";
      }

      if (window.confirm("include special chacters?")){
        if (window.confirm("Happy with these?: !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")){
            base_s += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        } else {
          custom_chars = window.prompt("Type special characters")
          
          // if charcters are repeated - make sure they only occur once
          custom_chars = del_repeated_char(custom_chars);
          base_s += custom_chars;
        }
      }
      if(base_s.length>4){
        enough = true;
      } else {
        window.alert("Not enough characters")
      }
    }
  
    
  base_s = del_repeated_char(base_s);
  console.log(base_s); 
  // ----------------------------------------------------------------
  // build the password using random charaters from the base_s string
  // ----------------------------------------------------------------
  var pw = "";
  for (i = 0; i < pw_len; i++) {
    var idx = Math.floor(Math.random() * base_s.length);
    pw += base_s[idx];
  }


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
