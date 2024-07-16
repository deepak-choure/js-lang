const name = "hitesh"
const repoCount =50
//console.log(name + repoCount+" value")
//not modern way 


//modern Way 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//declaration
const gameName = new String("lightening-One")

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'))//converse


const newString = gameName.substring(0,4);
console.log(newString)


const anotherString = gameName.slice(-13,4)
console.log(anotherString)


const newStringOne = "   hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://lliites.com/hitesh%20choudhary"
console.log(url.replace("%20","-"));


console.log(url.includes("hitesh"))

console.log(gameName.split("-"));

//three method to convert str into arr
// 1. split("")(empty string as dilimmiter ) 2. Array.from 3.spread operator (...)
let string = "lightening"
let arr1 = string.split("");
let arr2 = Array.from(string);
let arr3 = [...str]
console.log(arr1)
console.log(arr2)
console.log(arr3)
//reverse the string 
let str = "lightening";
let arr = Array.from(str);

for(let i =0;i<arr.length/2;i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i]=temp ;
}

let newstr = arr.join('')
console.log(newstr)