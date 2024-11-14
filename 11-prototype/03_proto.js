// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// Creating an object using the Person constructor
let person1 = new Person("Alice", 30);

// Using the method defined in the prototype
person1.sayHello(); // Output: Hello, my name is Alice
console.log(Person.prototype);


function Teacher(name, age, subject) {
  Person.call(this, name, age)//inhertance in constructor function 
  this.subject = subject;
  //method is not inherit yet 
}
Teacher.prototype = Object.create(Person.prototype)//now both have same prototype
//but the constructor is still different so
Teacher.prototype.constructor = Teacher;
let mam = new Teacher("Yogita", 23, "Math")
console.log(mam.name)
mam.sayHello();




Person.power = 2;
console.log(person1.power);//Output: undefined
console.log(Person.power);//Output: 2

//this keyword 
let person = {
  name: "John",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

let anotherGreet = person.greet;
anotherGreet();

