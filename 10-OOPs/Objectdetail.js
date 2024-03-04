
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);//3.141592653589793

const myObj = {
    name:"obj",
    key1:"one",
    isKey: true,
   print: function(){
    console.log("Hii");
   }
}
console.log(myObj);
console.log(Object.getOwnPropertyDescriptor(myObj,"name"));

Object.defineProperty(myObj,"name",{
    writable: false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(myObj,"name"));

for (const [key,value] of Object.entries(myObj)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
   }
    
}