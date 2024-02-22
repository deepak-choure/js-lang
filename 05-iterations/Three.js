// for of 
let arr = ["dev", "ishan", "kuldeep","jay", "atul"]

for (const name of arr) {
    console.log(name)
}

const greet = "Hello World!"
for (const letter of greet) {
    
    if(letter == " "){
        continue;
    }
    console.log(`${letter}`)
}

//Maps
//Unique key 
const map = new Map()
map.set("IN","India")
map.set("UsA","United States of America")
map.set("Fr","France")
console.log(map)

for (const key of map) {
    
    console.log(key);
    //log arrays of key value pair
}

//on object

const jsUser = {
    name: "Deepak",//key value pair ,both are string
    "full_Name": "Deepak Choure",
    age: 18,
    location: "Bhopal",
    isMingle: false,
    isAdult: true,
    email: "dchoure2306@gmail.com",
    marks: [93,97,89,94,95],
}

// for (const [iterator] of jsUser) {
//     console.log(iterator)
// }//here Object is not iterable 

//we take keys of object and then print value using it 
const keys = Object.keys(jsUser)
console.log(keys)
for(let i =0;i<keys.length;i++){
    console.log(keys[i]+" " +jsUser[keys[i]])
}
//same can be done by forin