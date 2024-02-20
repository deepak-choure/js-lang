//arrays


const myarr = [0,1,2,3,4,5];
const myfriend = ["dev", "ishan", "kuldeep", "tushit"]

const myArr2 = new Array(1,2,3,4)


//console.log(myarr[1])


//Array Method 


//myarr.push(6)
myarr.push(7)
//console.log(myarr)


myarr.pop()
//console.log(myarr)

//myarr.unshift(7)
// console.log(myarr.indexOf(9))
// console.log(myarr.includes(5))//true


//convert to string
const newArr = myarr.join()
//console.log(newArr)


//slice ,splice

console.log("A ",myarr)

const myn1 = myarr.slice(1,3);
console.log(myn1)

console.log("B ",myarr)


const myn2 = myarr.splice(2,1);
console.log(myn2)
console.log(myarr)