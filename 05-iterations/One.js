// for loop

for(let i =0;i<=10;i++){
    
    if(i%2 ==0){
        break;
    }
    console.log(i)
}

// for(let i =1;i<=10;i++){
//     //console.log(`Outer loop value: ${i}`)
//     for(let j =1;j<=10;j++){
//         //console.log(`Inner loop value ${j} and Inner loop ${i}`);
//         console.log(i+" * "+j+" = "+ i*j);
//     }
// }

// let myarr = ["flash","batman", "superman "]
// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element);
    
// }


//break and continue

for(let i =1;i<=20;i++){
    if(i ==5){
        console.log("Detected five")
        break;
    }
    console.log(`value of i is ${i}`)
}
for(let i =1;i<=20;i++){
    if(i ==5){
        console.log("Detected five")
        continue;
    }
    console.log(`value of i is ${i}`)
}
