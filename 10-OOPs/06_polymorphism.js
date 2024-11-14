//*********Polymorphism ************/
//method with same name can have multiple definition and return type  in different class while inheritance

class Bird {
    fly(){
        return  `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Sorry bro you can't fly :(`
    }
}

let bird = new Bird()
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

