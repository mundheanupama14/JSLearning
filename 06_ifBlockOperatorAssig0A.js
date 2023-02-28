console.log("****************** STEP-1 ******************");

console.log("*** Find The Greatest Number Amongst Two Number ***");

// Function with Two 2 Argument and No Return Value

function greaterNumber(value1, value2) { // STEP-1.1 Function Name with STEP-1.2 Two Arguments

    if (value1 > value2) {

        console.log(`The Gretest Number Is: ${value1}`);
    }
    else {

        console.log(`The Gretest Number Is: ${value2}`);
    }
    // STEP-1.2 No Return Value
}
greaterNumber(10, -10); // Function Call or Function Invoke
greaterNumber(800, 899); // STEP-1.3 Number to be Checked



console.log("****************** STEP-2 ******************");

console.log("*** Find The Even or Odd Numbers ***");

// Function with One 1 Argument and Return Value

function isEvenOrOddNum(myNumber) { // STEP-2.1 Function Name with STEP-2.2 One Argument

    if (myNumber % 2 == 0) {

        return true;
    }
    else {

        return false;
    }
    // S1TEP-2.2 Return Value True or False     
}
var result = isEvenOrOddNum(29); // Function Call or Function Invoke
console.log(`Condition Is: ${result}`);

var result = isEvenOrOddNum(44);
console.log(`Condition Is: ${result}`);

var result = isEvenOrOddNum(0);
console.log(`Condition Is: ${result}`);

var result = isEvenOrOddNum(101);
console.log(`Condition Is: ${result}`);



console.log("****************** STEP-3 ******************");

console.log("*** Find The Length Of Word Is Even or Odd Length ***");

// Function with One 1 Argument and Return Value

function wordLength(word) { // STEP-3.1 Function Name with STEP-3.2 One Argument
    var wordLength = word.length;
    if (wordLength % 2 == 0) {

        return "Even";
    }
    else {

        return "Odd";
    } 
    // STEP-3.2 Return Value Even or Odd
}
var result = wordLength("JavaScript");
console.log(`word "JavaScript" has ${result} length`);

// var result = wordLength("Developer"); // Insted of writting code in Two Lines we Writen in Single Line As writen below
// console.log(`word "Developer" has ${result} length`);

console.log(`word "Developer" has ${wordLength("Developer")} length`);

// var result = wordLength("Google");
// console.log(`word "Google" has ${result} length`);

console.log(`word "Google" has ${wordLength("Google")} length`); // Written in Single Line code without using var result variable to strore result
