class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


    logMe(){
        console.log(`Username is ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username,email, subject){
        super(username,email)
       this.subject = subject;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}


const sir = new Teacher("Hitesh","teacher@example.com","javascript");
sir.addCourse();
sir.logMe();
const person  = new User("user","useremail@example.com","userpassword");
person.logMe()
//person.addCourse()//ERROR: not a function


console.log(sir instanceof Teacher);
console.log(sir instanceof User);
console.log(person instanceof User);
console.log(person instanceof Teacher)