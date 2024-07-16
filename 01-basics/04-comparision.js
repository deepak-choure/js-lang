//comparison of same data type
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

//if we compare two different data type 
// console.log("2"> 1);//true 
// console.log("02"> 1);//true
console.log("2">"1");// (lexicographically) true


// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true
// the reason is that an equality check == and comparisons > < >= <= work differently
//comparison convert null to a numberr , treating it as 0.
//that's why null >= 0 is true and null > 0 is false;

console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined > 0);//false
//always avoid doing this comparison of different data type

/// strict check 
//===

console.log("2"=== 2);


