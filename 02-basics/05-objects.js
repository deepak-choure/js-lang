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

//to access any value we use jsuser["age"]

//another method 
//De structture 
//syntactical sugar 
const {location:place} = jsUser;
console.log(place)