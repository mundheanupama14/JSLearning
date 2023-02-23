console.log(`************** STEP-1 **************`);

// Function with Arguments and Return Value

function squareOfWordLength(string) { // STEP-1.1 Function Name with 1 argument i.e string, squareOfWordLength()
    console.log(`My String Is: ${string}`);
    console.log(`Total Length Of My String Is: ${string.length}`); // STEP-1.2 Find Length of word/string
    return string.length ** 2; // STEP-1.2 Return string length Square

}
// STEP-1.3 Function Invoke Or Function Call
var stringLength = squareOfWordLength("JavaScript"); // 1.3.1 Function Invoke Or Function Call
console.log(`The Square of string "JavaScript" Is: ${stringLength}`);

var stringLength = squareOfWordLength("Google Chrome"); // 1.3.2 Function Invoke Or Function Call
console.log(`The Square of string "Google Chrome" Is: ${stringLength}`);

var stringLength = squareOfWordLength("Developer Smart"); // 1.3.3 Function Invoke Or Function Call
console.log(`The Square of string "Developer Smart" Is: ${stringLength}`);


console.log(`************** STEP-2 **************`);

// Function with No Arguments and No Return Value

function stringOperation() {

    console.log(`Given String Is: "I am Angular Developer"`);

}
stringOperation(); // Function Call or Function Invoke

var string1 = "I am Angular Developer"; // STEP-2 Given String

var string1Length = string1.length; // STEP-2.1 Find string length
console.log(`Length Of Given String Is: ${string1Length}`); // 

var splitResult = string1.split(" "); // By using split() method we Calculate total length of words 
console.log(splitResult);
console.log(`Total Words of String: ${splitResult.length}`); // 

var divResult = string1Length / splitResult.length; // STEP-2.1 Division
console.log(`String length is Divided by Total number of words in string: ${divResult}`);

var mulResult = string1Length * splitResult.length; // STEP-2.2 Multiplication
console.log(`String length is Multiply with Total number of words in string: ${mulResult}`);
