// object can be declared by 2 ways 
// 1. like literal 
// 2. like constructor
//when object is created from constructor then it said to be singleton 



//like literal
const mySym = Symbol("key1")

const jsUser = {
    name: "Deepak",//key value pair ,both are string
    "full_Name": "Deepak Choure",
    //mySym:"myKey",
    //symbol as a key
    // [mySym]:"myKey",
    [mySym]: mySym,
    age: 18,
    location: "Bhopal",
    isMingle: false,
    isAdult: true,
    email: "dchoure2306@gmail.com",
    marks: [93,97,89,94,95],
}
//way to access
//1.
console.log(jsUser.email)
//2.
console.log(jsUser["email"])
//console.log(typeof jsUser["mySym"])//string, for 1st one
console.log(typeof jsUser[mySym])//stringit always return the type of value attached to that key
console.log(jsUser)
console.log(jsUser.full_Name)

//override 
jsUser["email"]= "lighteningOne@gmail.com";

//console.log(jsUser)

//to lock the object from overriding it
//Object.freeze(jsUser)
jsUser["email"]="dchoure2306@gmail.com"//no change  if freez is on
//console.log(jsUser)


//function 

jsUser.greeting = function(){
    console.log("Hello js user")
   
}
jsUser.greetingTo = function(){
    console.log(`Hello js user, ${this.name}`)
   
}
jsUser.greetingTo()


