console.log(Date())
let myDate = new Date();
console.log(myDate)
console.log( myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())



/// you can declare your own Date 

//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate  = new Date("2023-01-23")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/(1000*60*60*24*365)))


let newDate = new Date();
console.log(newDate.getDate())

