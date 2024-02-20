const user = new Object();
// console.log(user)

user.id = "deepak_choure"
user.name = "deepak"
user.isLoggedin = true
// console.log(user)


//nested Object
const newUser = {
    email: "some@gmail.com",
    fullname: {
        firstname : "Deepak",
        middlename: "",
        lastname: "Choure",

    },

}
console.log(newUser["fullname"]["firstname"])

//combining multiple obj
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)


//spread method
const obj3 = {...obj1,...obj2}
console.log(obj3)

//key array
console.log(Object.keys(user))
//values
console.log(Object.values(user))

//key value pair as an array
console.log(Object.entries(user))//return array of array


//checks property
console.log(user.hasOwnProperty("id"))


