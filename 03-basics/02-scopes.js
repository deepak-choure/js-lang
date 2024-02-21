var c = 300
let a = 300
if(true){
    let a = 10
const b = 20 
var c =30

}
// console.log(a)
// //console.log(b)
// console.log(c)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        //console.log(username);
        }
        //console.log(website)
        two()
}
one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "Youtube"
        //console.log(username+website);
    }
    //console.log(website)
}
//console.log(username);



//+++++++++++++++++++ Interesting +++++++++++++++

console.log(addone(5))//no errorkq;kkh
 function addone(num){
    return num+1

 }


 addTwo(5)//show error as it is not defined as it declared like exp

//here declaration of function is like an expression
 const addTwo = function(num){
    return num+2;
 }