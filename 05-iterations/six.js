const langs = ["java","cpp","c","javascript","typescript","python","ruby","Rust"]

const values = langs.forEach((item)=>{
    console.log(item);
})

console.log(values)///not return anything


const mynums = [1,2,3,4,5,6,7,8,9,10]

console.log(mynums.filter((num)=>num>4))//it check the each value on logic of callback function and if it return true then added to array 
//calback return boolean

//same work 
const newnums =[]
mynums.forEach((nums)=>{
    if(nums>4){
        newnums.push(nums)
    }
})
console.log(newnums)


const books = [
{title: "Book zero", genre: "Fiction", publish: 1981,
edition: 2012},
{title: "Book one", genre: "history", publish: 2011,
edition: 2016},
{title: "Book two", genre: "Non-fiction", publish: 2002,
edition: 2018},
];
let userBook = books.filter((book)=> (book.publish >=2000)&&(book.genre ==="history"))

console.log(userBook)


//now consider
const nums = [0,1,2,3,4,5,6,7,8,9];
console.log(nums.filter((num)=>(num*10)))//[1,2,3,4,5,6,7,8,9] will be op 
//as 0 is consider as false and other value are consider as true so they get added into new array