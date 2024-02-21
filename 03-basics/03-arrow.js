const user = {
    username: "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
           }

           
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this)//{}//empty 

// function chai(){
//     let user = "Hitesh"
//     console.log(this.username)//undefine
// }
// chai()

///********NOte***** */
/*this keyword only works in object till now 
if we try to print individual then empty object is returned 
even in function its behaviour changes */


/****************Arrow*************/
//previously
// const chai = function(){
//     let user = "Hitesh"
//     console.log(this.username)//undefine
// }
// chai()

//Now

const chai =() => {
    let username = "hitesh"
    console.log(this)
}

//chai()


// () => {}

const addTwo = (num1 , num2) => {
    return num1 + num2 
}

console.log(addTwo(3,4))//7

// implicit return (no need to put return keyword)
//while using braces it is required to use return so remove curly braces and avoid return 
//this is very useful in react 
const addTwo2 = (num1,num2) =>  (num1+num2)
console.log(addTwo2(4,6))//10

//whatif we return object 
//then\
//() is must otherwise bracces consider as structure of function: () => {}
const add = (num1,num2) => ({username:"hitesh"})
console.log(add(2,4))


//arrow in loop
const myArr = [0,1,2,3,4]

myArr.forEach((num)=>(num*2))
