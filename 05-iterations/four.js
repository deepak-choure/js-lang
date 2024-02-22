//for in
const jsUser = {
    name: "Deepak",//key value pair ,both are string
    "full_Name": "Deepak Choure",
    age: 18,
    location: "Bhopal",
    isMingle: false,
    isAdult: true,
    email: "dchoure2306@gmail.com",
    marks: [93,97,89,94,95],
}
for (const key in jsUser) {
    // if (Object.hasOwnProperty.call(jsUser, key)) {
    //     const element = jsUser[key];
        
    // }
    // console.log(jsUser[key])
    console.log(`${key} is key of ${jsUser[key]}`)
}

const arr = ["java","cpp","c","javascript","typescript","python","ruby","Rust"]
for(const lang in arr){
    //console.log(lang)//return key (indexes of value in array)
    console.log(arr[lang])
}



const map = new Map()
map.set("IN","India")
map.set("UsA","United States of America")
map.set("Fr","France")
for (const key in map) {
    console.log(key);
  //map is also is non iterable so nothing get logged 
}



//just difference in forof and forin is
// forof returns values and forin returns keys
