// 1a 
let randomNum = Math.floor(Math.random() * 5 + 1);
console.log(randomNum);

// 1b -- Couldn't get this to work. Only two would work at a time.

/* if (randomNum >= 4) {
    console.log("Greater than or Equal to 4"); 
} else if (randomNum == 2 || 3) {
    console.log("Equal to 2 or 3");
} else (randomNum = 1); {
    console.log("Equal to 1");
}*/
// My attempt above. Right answer below
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
  } else if (randomNum == 2 || randomNum == 3) {
    console.log("Equal to 2 or 3");
  } else {
    console.log("Equal to 1");
  }

  //OR


if (randomNum >= 4) {
    // Same as line above
    // if (randomNum > 3) {
      console.log("Greater than or equal to 4");
    } else if (randomNum >= 2) {
    // Same as line above
    // } else if (randomNum > 1) {
      console.log("Equal to 2 or 3");
    } else {
      console.log("Equal to 1");
    }
    
//ELSE has no condition. It's there to catch if the things above it are false

// 1c
if (randomNum != 3) {
    console.log("Not Equal to 3")
}

// 1d
// if (randomNum != 3 || 5) {
   // console.log("NOT equal to 3 AND not equal to 5");
//}
//Above my answer. 
if (1 !== 3 && 1 !== 5){
    console.log("NOT equal to 3 AND not equal to 5");
  }

// 1e
if (randomNum = 2 || 4) {
    console.log("Equal to 2 OR Equal to 4")
}