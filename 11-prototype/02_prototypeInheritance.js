const user ={
    name: "Username",
    email: "chai@example.com"

}
const Teacher ={
    makeVideo:true,
}
const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment:"Js Assignment",
    fulltime: true,
    __proto__ : TeachingSupport
    //TA can access TeachingSupport
}

Teacher.__proto__ = user;
//now teacher  can use property of user 
console.log(Teacher.name);

// TeachingSupport.__proto__ = Teacher
//Modern way of doing the same
Object.setPrototypeOf(TeachingSupport,Teacher)
//by this teachingSupport can access teacher
console.log(TeachingSupport.makeVideo);
console.log(Object.getPrototypeOf(TeachingSupport));


//hasOwnProperty used to distinguish b/w defined property or inherited once 
console.log(TeachingSupport.hasOwnProperty("makeVideo"));//false, but we had accessed above 
console.log(TeachingSupport.hasOwnProperty("isAvailable"));//true 


