const user ={
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    //method
    
    printLoginNO: function(){
        console.log(`user loggedin in ${this.loginCount} devices `);
    }
}

console.log(user.username);
user.printLoginNO()
//Constructor function
function User(username ,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    return this;
}
//Constructor function should be called using new keyword for new execution context
const userOne = new User("Hitesh", 12,true);
const userTwo = new User("user",1,false)
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);  