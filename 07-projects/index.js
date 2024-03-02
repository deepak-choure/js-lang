// let first,second,third

// let random = Math.random();
// if(random<0.33){
//     first="Crazy"
// }else if(random>=0.33 && random<0.66){
//     first = "Amazing"
// } else {
//     first = "fire"
// }
// random = Math.random()
// if(random<0.33){
//     second="Engines"
// }else if(random>=0.33 && random<0.66){
//     second = "Garments"
// } else {
//    second = "Foods"
// }
// random = Math.random()
// if(random<0.33){
//     third="Bros"
// }else if(random>=0.33 && random<0.66){
//     third = "LImited"
// } else {
//     third = "Hub"
// }
// console.log(`${first} ${second} ${third}`);


function fact(n){
    // if(n ==1){
    //     return 1;
    // }
    // return n * fact(n-1);

    //using array 
    let arr = Array.from(Array(n+1).keys());
    let c = arr.slice(1,).reduce((accumulator,currval)=>{
        return accumulator*currval;
    })
    return c;

}
console.log(fact(5));

