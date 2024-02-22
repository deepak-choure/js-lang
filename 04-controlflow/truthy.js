const userEmail = "emal.com"
if(userEmail){
    console.log("email recorded")
}
else{
    console.log("Enter user email")
}
//it is assume that the non-empty string is true 
// and empty string is false

//falsy value (the value consider as false)
/**
 * false
 * 0
 * -0
 * 0n
 * ""
 * null
 * undefined
 * NaN
 */
//other than this are truthy values
/**
 * "0"//0 is false but "0" is true 
 * " "//with space
 * [] // empty array
 * {}//empty object
 * function(){}
 *
 * 
 */

//but best practise is
const arr = []
if(arr.length === 0){
    console.log("Array is empty");
}


//empty obj 
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}



//Nullish Coalescing Operator(??): null , undefined

let val1;
//val1 = 5 ?? 10 // 5
//specially used in database 
//when value is not there and we have to avoid null and undefined 

//val1 = null ?? 10 //10
//now instead of 10 we use complex database call which bring some value 

val1 = undefined ?? 15

console.log(val1);

//ternary
//(condition) ? statement1 : statement2
//if condition is true then statement1 is execute otherwise statament2 will execute 

const iceTeaPrice =100
iceTeaPrice>=80 ? console.log("greater than 80") : console.log("less than 80")
