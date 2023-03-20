// Assignment 0A: Arrow Fuction , 15_arrowFuc_assigA.js

console.log("********** STEP-1 Arrow Fuction with No Arguments and No Return Value **********"); // STEP-1

let display = () => {

    console.log("Good Morning, Today is Monday"); // STEP-1 a) "Good Morning, Today is Monday"
}
display();


console.log("********** STEP-2 Arrow Fuction with 3 Arguments and No Return Value **********"); // STEP-2

let multiplyResult = (num1, num2, num3 = 1 ) => {

    console.log(`Multiplication Result is: ${(num1 * num2 * num3)}`);
}
multiplyResult(5, 5, 2); // STEP-2 a) Values to be Passed -> 5,5,2

multiplyResult(10, 4); // STEP-2 b) Invoke the same Fuction for Values -> 10,4
// Note: Assign Default value to 3rd Argument as 1, i.e num3 =1


console.log("********** STEP-3 Arrow Fuction with 5 Arguments and Return Value **********"); // STEP-3 Methode-1

let addition = (num1, num2, num3, num4, num5) => {

    const result = num1 + num2 + num3 + num4 + num5;
    return result;
}
const additionResult = addition(100, 100, 200, 349, 756); // STEP-3 a) values to be passed -> 100,100,200,349,756
console.log(`Addition Result is: ${additionResult}`);

const concatResult = addition("I am", " learning", " ES6", " features", " in depth"); // STEP-3 c) Invoke the same Arrow Function for Values  
console.log(`Concatenation Result is: ${concatResult}`); // For Values: "I am", "learning", "ES6", "features", "in depth"

// STEP-3 Metode-2 // We can also write the Arrow Fuction in this way: It gives same result // STEP-3 Metode-2

let additionRes = (num1, num2, num3, num4, num5) =>  num1 + num2 +num3 + num4 + num5;
//console.log(`Addition Result is: ${(additionRes(100, 100, 200, 349, 756))}`);
