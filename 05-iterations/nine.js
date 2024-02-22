//Reduce 
//it is used when we requires previous value as well as current value to  perform a task 

//give me sum of  elements in an array 
//using for loop
const arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(let i =0;i<arr.length;i++){
    sum = sum +arr[i];
}
console.log(sum)

//using forEach
let previousSum = 0
let newarr = []
arr.forEach((num)=>{
    previousSum=num+previousSum;
    newarr.push(previousSum)
})
console.log(newarr);


//using map
let prevSum =0;
console.log(arr.map((num)=>{prevSum = num+prevSum;return prevSum}));

//same thing can be done by function
console.log(arr.reduce((prevValueSum,currValue)=>{
    console.log(`Previous value sum: ${prevValueSum} and Current value: ${currValue}`)
    return prevValueSum+currValue;
},0))//here 0 is used to initialise the previousValueSum(1st parameter)