//Generator function 
function* numberGenerator(){
    yield 1
    yield 2 
    yield 3 
}

let gen  = numberGenerator()
console.log(numberGenerator());//does not give result as expected


//how to execute then
//using next() iterator 
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);//undefined

