// module type import (ES6 standard)

//default import 
import  add  from "./exportfunctions";
console.log(add(2,3));

//named import 
import {subtract,multiply} from "./exportfunctions";
console.log(subtract(3,2));
console.log(multiply(2,2));
