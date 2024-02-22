//forEach
const langs = ["java","cpp","c","javascript","typescript","python","ruby","Rust"]

langs.forEach((item)=>{
    console.log(item)//here item is a data stored in each index 
})

function print(item){
    console.log(item)
}
langs.forEach(print)//only reference is givven in callback

langs.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding = [{
    languageName : "javascript",
    extinsion : "js"
},
{
    languageName: "java",
    extinsion: "java"
},
{
    languageName: "Python",
    extinsion: "py"
}]

myCoding.forEach((item)=>{
   console.log(item.languageName);
   console.log(item.extinsion);

})