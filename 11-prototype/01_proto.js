let superHero = ["thor","spiderMan"];
//object;
let Hero = {
    thor:"Hammer",
    spiderman:"Sling",


    getSpiderPower : function(){
        console.log(`SpiderMan power is ${this.spiderman}`)
    }
}

/**
 * we know it is an object and we can add any method using .prototype 
 * and we have studied that everything is in form of object so can we add an method in that object
 * use it everywhere let's seee
 * 
 */
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Hero.hitesh();
//now since array is also inherit the Object so array should have hitesh()
superHero.hitesh()//yess


//Now if we assign property to lower level is it available to higher level ???
//eg: if we assign method to array is it available to Object let's see

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
//Hero.heyHitesh();//no it is opposite of inheritance;


let myName = "Hitesh    "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength();