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

Teacher.__proto__ = User;
//now teacher  can use property of user 

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
//by this teachingSupport can access teacher