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