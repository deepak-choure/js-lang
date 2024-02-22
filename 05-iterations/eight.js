//chaining 
let nums = [0,1,2,3,4,5,6,7,8,9]
const newNums = nums
                    .map((num)=> num * 10)//this will implement first then next and the returned array will be consider for next 
                    .map((num)=> num+1)
                    .filter((num)=>(num>=40))
console.log(newNums)                   