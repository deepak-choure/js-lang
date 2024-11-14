class User {
    constructor(email,password){
        this.email = email;
        this.password = password;

    }
    get email(){
        return this._email.toUpperCase()
    }
    
    //getter
    get password(){
        return `${this._password}Hitesh`
    }
    //if there is getter then setter is needed
    set password(pass){
        this._password = pass;       
    }
    /*both getter and setter are function having name of property we are setting but to avoid stack overflow we use different name while refering to that property 
    */

    set email(value){
         this._email =value
    }

}

const hitesh  = new User("Hitesh@example.com","password");

console.log(hitesh.email);
console.log(hitesh.password);


//ES5 syntax
function data(email,username){
    this._email = email;
    this._username = username;

    Object.defineProperty(this,"email",{
        get: function(){return this._email.toUpperCase()},
        set: function(value){this._email = value},
    })
}

const chai = new data("chai@example.com","chai")
console.log(chai.email);

//Object based 
const user = {
    //it is a property
    _email:`h@hc.com`,
    _password: `abc`,

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);//here we are calling a getter but not as function but as property (even email property not exist but getter method have access to _email and when it called, _email is accessed internally );