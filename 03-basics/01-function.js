function myName(){
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
    console.log("A")
    console.log("K")
}

myName//reference of a function
myName()//execution of a fn


function loginUserMessage(username = "Sam"){//parameter can be setted default
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`

}
console.log(loginUserMessage("Deepak"))

//rest 
//when it is unknown that how many argumnt is passed 
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,398,100))


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);//if extracted paramete is not available the undefind is there
}

handleObject(user)
handleObject(user)