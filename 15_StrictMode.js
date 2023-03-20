console.log(`***Strict Mode****`);

'use strict'   //it is a ES6 feature

//myName = "Virat"; // Not allowed to declare variable without keyword

let myName = "Virat";
console.log(myName);

//delete myName;    //not allow in strict mode

// person = {  // Not allowed to define an object without var, let and const
//     firstName: "Virat",
//     lastName: "Kohli",
//     age : 33
// }

const student = {
    rollNo: 34,
    age: 17,
    city: "PUNE"
}

//student = null;

// delete student; // Not allowed in strict mode


function show (arg1,arg2){
    console.log(arg1/0);
}
show(100,200);