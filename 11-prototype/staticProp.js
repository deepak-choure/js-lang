class User {
    constructor(username){
        this.username = username;

    }
    sayHii(){
        console.log(`Hii my name is ${this.username}`)
    }

   static createId(){
        return `123`
    }
    // Static methods and properties are associated with the class itself rather than instances of the class. 
}

//creating a user
let d = new User("Deepak");
d.sayHii();
//console.log(d.createId())
console.log(User.createId())



class child extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const myChild = new child("betu","mybetu@example.com");
myChild.sayHii()
console.log(child.createId());