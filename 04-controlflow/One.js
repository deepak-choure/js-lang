// if

if(true){
    //code execute
}
if(false){
    //code does not execute\\/+
    
}
// == vs ===
//1st one consider value and 2nd check for data type as well 


//if else
// const temp =40
//         if(temp < 50){
//             console.log("less than 50")
//         }else{
//             console.log("temp is greater than 50")
//         }

//short hand notation

const balance = 1000 
if(balance>500) console.log("Sufficent");



//else if 
//  if( balance<500){
//     console.log("less than 500")
//  } else if(balance< 750){
//     console.log("less than 750")
//  } else{
//     console.log("ok")
//  }

// multiple conditon
const userLoggedin = true
const debitCard = true
if(userLoggedin && debitCard){
    console.log("Allow to buy course");
}

const loggedInfromGoogle = false
const loggedInfromGithub = true
if(loggedInfromGithub || loggedInfromGoogle){
    console.log("Welcome")
}

