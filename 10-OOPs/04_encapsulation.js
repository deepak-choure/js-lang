/***************Encaptulation************* */
/**Declaring all the variables in the class as private and writing public methods in the class to set and get the values of variables */

class BankAccount{
    #balance = 0;
    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}


let account = new BankAccount();
console.log(account.balance);//undefined
// console.log(account.#balance);

console.log(account.getBalance());


