const marvel_heros = ["thor","Ironman","captain","spiderman"]
const Dc_heros = ["Superman", "flash","batman"]


//push vs concat


marvel_heros.push(Dc_heros)
console.log(marvel_heros);
const heros = marvel_heros.concat(Dc_heros)
console.log(heros);

//spread operator
const all_heros = [...marvel_heros,...Dc_heros]
console.log(all_heros);

//when array are nested, to simplfy it 
const another_array = [1,2,3,[4,5,6],7,[8,9,[0,10]]];

const simple_another_array = another_array.flat(Infinity)
console.log(simple_another_array);

//Array. method
console.log(Array.isArray("Name"))
// console.log(Array.from("Deepak"));
console.log(Array.from({name: "Deepak",age: 21, }))//only valid for iterable object

//we can create an array of 0 to n-1
let number =6;
console.log(Array.from(Array(number).keys()));

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1,num2,num3))
console.log(Array.of({name: "Deepak",age: 21, }))