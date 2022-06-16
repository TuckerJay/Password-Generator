 
 // Character arrays
 var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var specialArray = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-","/",":",";","<",">","=","?","@","[","]","\\","^","_","`","{","|","}","~"];


// Random return functions
var randUpper = function() {

  return upperArray[Math.floor(Math.random() * 26)];

}

var randLower = function() {

  return lowerArray[Math.floor(Math.random() * 26)];

}

var randNum = function() {

  return Math.floor(Math.random() *10);

}

var randSpecial = function() {

  return specialArray[Math.floor(Math.random() * specialArray.length)];

}


// Password length confirmation loop
var passLengthConfirm = function () {

  var length = window.prompt("What is the desired length of your password? (8-128 characters)");

  if ( isNaN(length) ) {
    window.alert("Please enter a number.");
    passLengthConfirm();
  }
  if ( length < 8 || length > 128) {
    window.alert("Please enter an amount between 8 and 128 characters.")
    passLengthConfirm();
  }
  
  return length;

}


// Password assembly block
var generatePassword = function() {


  // Password criteria retrival 
  var passLength = passLengthConfirm();

  var upperConfirm = window.confirm("Would you like to include uppercase letters in your password?");

  var lowerConfirm = window.confirm("Would you like to include lowercase letters in your password?");

  var numConfirm = window.confirm("Would you like to include numbers in your password?");

  var specialConfirm = window.confirm("Would you like to include special characters in your password? (i.e. &, @, +, etc.)");

  if ( !upperConfirm && !lowerConfirm && !numConfirm && !specialConfirm ) {
    window.alert("Please select at least one criterion.");
    generatePassword();
  }


  var passString = "";


  // All confirmed block
  if ( upperConfirm && lowerConfirm && numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 4) + 1);
      var char;


      if (x == 1) {
        char = randUpper();
      }
      if(x == 2) {
        char = randLower();
      }
      if(x == 3) {
        char = randNum();
      }
      if(x == 4) {
        char = randSpecial();
      }

      passString = passString + char;

    }

  }


  // Not upper Block
  if ( !upperConfirm && lowerConfirm && numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 3) + 1);
      var char;

      
      if(x == 1) {
        char = randLower();
      }
      if(x == 2) {
        char = randNum();
      }
      if(x == 3) {
        char = randSpecial();
      }

      passString = passString + char;

    }

  }


  // Not lower Block
  if ( upperConfirm && !lowerConfirm && numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 3) + 1);
      var char;


      if (x == 1) {
        char = randUpper();
      }
      if(x == 2) {
        char = randNum();
      }
      if(x == 3) {
        char = randSpecial();
      }

      passString = passString + char;

    }

  }


  // Not num block
  if ( upperConfirm && lowerConfirm && !numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 3) + 1);
      var char;


      if (x == 1) {
        char = randUpper();
      }
      if(x == 2) {
        char = randLower();
      }
      if(x == 3) {
        char = randSpecial();
      }

      passString = passString + char;

    }

  }


  // Not special block
  if ( upperConfirm && lowerConfirm && numConfirm && !specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 3) + 1);
      var char;


      if (x == 1) {
        char = randUpper();
      }
      if(x == 2) {
        char = randLower();
      }
      if(x == 3) {
        char = randNum();
      }

      passString = passString + char;

    }

  }


  // Upper & Lower
  if ( upperConfirm && lowerConfirm && !numConfirm && !specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 2) + 1);
      var char;


      if (x == 1) {
        char = randUpper();
      }
      if(x == 2) {
        char = randLower();
      }

      passString = passString + char;

    }

  }


  // Upper & Num
  if ( upperConfirm && !lowerConfirm && numConfirm && !specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 2) + 1);
      var char;


      if (x == 1) {
        char = randUpper();
      }
      if(x == 2) {
        char = randNum();
      }

      passString = passString + char;

    }

  }


  // Upper & Special
  if ( upperConfirm && !lowerConfirm && !numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 2) + 1);
      var char;


      if (x == 1) {
        char = randUpper();
      }
      if(x == 2) {
        char = randSpecial();
      }

      passString = passString + char;

    }

  }


  // Lower & Num
  if ( !upperConfirm && lowerConfirm && numConfirm && !specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 2) + 1);
      var char;


      if(x == 1) {
        char = randLower();
      }
      if(x == 2) {
        char = randNum();
      }

      passString = passString + char;

    }

  }


  // Lower & Special
  if ( !upperConfirm && lowerConfirm && !numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 2) + 1);
      var char;


      if(x == 1) {
        char = randLower();
      }
      if(x == 2) {
        char = randSpecial();
      }

      passString = passString + char;

    }

  }


  // Num & Special
  if ( !upperConfirm && !lowerConfirm && numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var x = Math.floor((Math.random() * 2) + 1);
      var char;


      if(x == 1) {
        char = randNum();
      }
      if(x == 2) {
        char = randSpecial();
      }

      passString = passString + char;

    }

  }


  // Upper only
  if ( upperConfirm && !lowerConfirm && !numConfirm && !specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var char = randUpper();

      passString = passString + char;

    }

  }


  // Lower only
  if ( !upperConfirm && lowerConfirm && !numConfirm && !specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var char = randLower();

      passString = passString + char;

    }

  }


  // Num only
  if ( !upperConfirm && !lowerConfirm && numConfirm && !specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var char = randNum();

      passString = passString + char;

    }

  }


  // Special only
  if ( !upperConfirm && !lowerConfirm && !numConfirm && specialConfirm ) {

    for ( i = 0; i < passLength; i++ ) {

      var char = randSpecial();

      passString = passString + char;

    }

  }
  

  return passString;

}

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
