/*********Abstractions********** */
//Hiding the complex details and logic which boggle your head and provide the some easy name to use it 
//generally it is done in base class and then extends that class to other class and it is compulsary to implement in child class (java thing)

class CoffeeMachine{
    start(){
        //call db
    //filter value 
    //idk basically
    return  `Starting the machine...`;
    }
    brewCoffee(){
        //complex Calculation
        return `Brewing Coffee`
    }
    makeCoffee(){
        return `${this.start()} , ${this.brewCoffee()}`;
    }

}
let myMachine = new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.makeCoffee());


