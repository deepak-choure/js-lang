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