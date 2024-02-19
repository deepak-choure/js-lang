//primitive

// 7 types : String,Number ,boolean ,null , undefined,Symbol,Bigint


const score = 100
const someNumber = 100.9

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol("123");
const anotherId  = Symbol("123")
console.log(id === anotherId);//false 

const bigNumber = 234935839934839349n
//convert to big int by applying n at last;


//Reference (Non Primitive)..call by reference
//Array, Objects, functions 


//***********************Memory*********************** */

//stack (Primitive),
//heap (Non-primitive)
let name1 = "Deepakchoure"

let name2 = name1;//copy is passed here
name2 = "DevNigam"//copy get updated
console.log(name1)//Deepakchoure
console.log(name2)//DevNigam

///non-primitive(heap)(call by reference)
let userOne = {
    email: "dchoure@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;//reference is passed here
userTwo.email = "user@email.com"

console.log(userOne.email)
console.log(userTwo.email)