
console.log(myName); // Allowed to access
// console.log(age); // Not Allowed to access
var myName = "Virat Kohli";
let age = 33;

show(); // Allowed as it is Normal Functions are Hoisted

function show(){
    console.log("Show() function");
}

// greet(); Not Allowed as it is Function Expression And Function Expression Does Not Hoisted

let greet = function(){
    console.log("Good Morning");
}
greet();


console.log("WAP To Print the Prime Numbers for a Given Range i.e from 1 to n Or Number ");

function getPrimeNumbers(num){ // Pseudo Code
    // Array of Prime Numbers till num Starting from 2
}
const arrayNumbers = getPrimeNumbers(50);
getPrimeNumbers(10);