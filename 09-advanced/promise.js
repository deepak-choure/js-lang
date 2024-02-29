//1.
const promisOne = new Promise(function(resolve,reject){
    //do an async task
    // db calls 
    ///network request
    setTimeout(()=>{
        console.log("Async task complete")
         resolve()
    },1000)
   
});
//2.
promisOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});
//3.
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
});

promiseThree.then(function(user){
    console.log(user)
});

//4.
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Deepak Choure",password:"123"})
        }else{
            reject("ERROR: Something went Wrong!!")
        }
    },1000)
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolved or rejected");
})


//5.
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"javascript", password: " 123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000);
});

async function consumePromiseFive(){
////directly handle (expectted that resolve will be done definetly)
//     const response = await promiseFive;
//     console.log(response)
////for error handling
try {
    const response = await promiseFive
    console.log(response);
} catch (error) {
    console.log(error);
}
 }
consumePromiseFive()



async function getAllUsers(){
    //fetch is async operation so it require time 
    //but to avoid async nature we put await so nothing can execute till it not ge complte

 const response =  await fetch("https://jsonplaceholder.typicode.com/users")

 const data = await response.json()//here json method is also a async task so it need to await also
 console.log(data);
}
//  getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(response){
   return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))