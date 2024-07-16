// console.log("start1 ")
// function AsyncTask(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("inside timeout 4")
//             resolve()
//         }, 1000);
//     })
// }
// console.log("before function 2")
// AsyncTask().then(()=>{
//     console.log('async task done 5')
// })
// console.log("after function 3")




// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = true;

//         if(!error){
//             resolve({username:"deepak",age:21});
//         } else{
//             reject("some error geting user")
//         }
       
//     }, 3000);
// }).then((data)=>{
//     console.log(data);
//     return data.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// })


let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"deepak Choure",age:21});
    }, 3000);
})

async function Consumepromise(){
    let response = await promise
    console.log(response.username)
}




async function getallusers(){
   let data =  await fetch("https://jsonplaceholder.typicode.com/users")
 let users = await data.json()
 return users;
}

//  getalluser().then((user)=>{
//     let arr=[];
//     for(let i =0;i<user.length;i++){
//         arr.push(user[i].name)
//     }
//     console.log(arr)
//  })

 async function usersname(){
   let users= await getallusers();
   let namearr = users.map((user)=>{return {"name":user.name,"email":user.email}})
   console.log(namearr)

 }
 usersname();