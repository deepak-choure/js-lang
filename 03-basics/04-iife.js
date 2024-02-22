//Immediately Invoked function expression (IIFE)
//when due to execution of global scope error show in function and 
//when you want to connect immediatly to database etc 

//here iife come to rescue the life 


function connectToDb(){
    console.log("db connected");
}
//connectToDb()//calling naturally


//iife

(function connect(){
    //named IIfe
    console.log("DB connected")
})();
//()()
//here 1st represent defination and 2nd represent execution 
//now to stop the iife  we need ";" at end
(()=>{
    console.log("Db connected")
})();

//for parametric fn 
( (name)=>{
    console.log(`Db connected to ${name}`);
} )("Deepak");