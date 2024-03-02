const score = 400

const balance = new Number(100);
console.log(balance)
//tofixed = fixed no of digit after decimal
console.log(balance.toFixed(2));

//tostring()= convert to string now all property of string can be used;
console.log(balance.toString());


//precision 
const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3))


//toLocale
const hundreds = 1000000;
console.log(hundreds.toLocaleString());//10,00,000


//toexponetial -return a string represent number into exponential
console.log(hundreds.toExponential())

//valueof 
console.log(hundreds.valueOf()) 

//+++++++++++++++++ Math ++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.4))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.pow(2,10))
console.log(Math.max(4,5,6,7883,7,88,4456))
console.log(Math.min(4,5,6,7883,7,88,4456))
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 1;
const max = 7;


console.log(Math.floor(Math.random() * (max -min +1))+min)
//another way 
/**
 * between a and b 
 * a + random*(b-a)
 * 
 */
