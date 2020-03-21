// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var passwordLength = prompt("How many character would you like your password to be?");
  if (passwordLength<8|| passwordLength>128){
    alert("Enter a length between 8 and 128 characters");
    return;
  }
  else{
    var includesUppercase = confirm("Would you like to include uppercase letters?");
    var includesLowercase = confirm("Would you like to include lowercase letters?");
    var includesNumbers = confirm("Would you like to include numbers?");
    var includeSpecial = confirm("Would you like to include special characters?");
  }

  var charTypes = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    special: "!@#$%^&*()-=+[]{};:~,./<>?",
  }
  var uppercaseOptions = charTypes.uppercase.split("");

  var lowercaseOptions = charTypes.lowercase.split("");

  var numberOptions = charTypes.numbers.split("");

  var specOptions = charTypes.special.split("");

  //if all character types are declined no password can be made
  if(includesUppercase === false && includesUppercase === false  && includeSpecial === false && includesNumbers === false){
    alert("Please accept at least one character type for your randomly generated password.");
  }else{
    var pw = [];
    for(i = 0; i<passwordLength;i++){
      if(includesUppercase===true){
      var x = uppercaseOptions[Math.floor(Math.random()*uppercaseOptions.length)];
      pw.push(x);
      }
      if(includesLowercase===true){
        var y = lowercaseOptions[Math.floor(Math.random()*lowercaseOptions.length)];
        pw.push(y);
      }
      if(includesNumbers===true){
        var z = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        pw.push(z);
      }
      if(includeSpecial===true){
        var w = specOptions[Math.floor(Math.random()*specOptions.length)];
        pw.push(w);
      }
    }
    var ranpass = [];
    for(i = 0; i<passwordLength;i++){
      var a = pw[Math.floor(Math.random()*pw.length)];
      ranpass.push(a);
    }
  console.log(ranpass);
  password = ranpass.join("");
    alert("Your randomly generated password is "+password);
      
    
    }
    
  }
