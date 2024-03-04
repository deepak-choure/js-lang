const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  const greet = function(greeting) {
    console.log(greeting + ' ' + this.fullName());
  };
  
  // Without bind
  //greet('Hello'); // This will throw an error because `this` inside greet is not bound to person
  
  // Using bind
  const greetJohn = greet.bind(person); // Now `this` inside greet will refer to person
  greetJohn('Hello'); // Output: Hello John Doe
  