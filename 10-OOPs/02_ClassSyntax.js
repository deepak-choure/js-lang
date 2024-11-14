class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

   encryptPassword(){
    return `${this.password}abc`
   }

   changeUsername(){

    return `${this.username.toUpperCase()}`
   }
}

const chai = new User("chai","chai@example.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//behind the scene it work like that 
/**************************************** */
function user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;

}
//we are only manipulating the prototype of user class  
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new user("tea","tea@example.com","456") //new execution context of user named as tea 
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

/************************************* */
