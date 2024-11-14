const user ={
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    //method
    
    PrintloginCount: function(){
        console.log(`user loggedin in ${this.loginCount} devices `);
    }
}

console.log(user.username);
user.PrintloginCount()
//Constructor function
//function which act as a constructor in class syntax and the name of class got from name of the constructor function
function User(username ,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
   
}
//Constructor function should be called using new keyword for new execution context without new the prev one got updated
const userOne = new User("Hitesh", 12,true);
const userTwo = new User("user",1,false);
//2 different memory get allocated for same function but with different argument 
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);  

//*****function inside constructor function *****/
function Tea(type,quantity){
    this.type = type,
    this.quantity = quantity
    this.description = function(){
        return `This cup has a Tea having type ${this.type} of ${this.quantity} quantity`
    }
}
const myTea = new Tea("Lemon Tea","medium");
console.log(myTea.description());


/******* What if user think it as normal function not constructor function ***/
function Drink(name){
    if(!new.target){
        throw new Error("Can't call constructor function without new keyword")
    }
    this.name = name;
    return this;
}
let myDrink = new Drink("Tea")
let anotherDrink = Drink("coffee")