console.log("**********  STEP-1 Two Functions: show() and display()  **********");
// Function with No Arguments and No Return Value
function show() {
    console.log("Hi, Welcome to HTML, CSS, and JavaScript Programming Language.");
}
show(); // Function Call or Function Invoke

// Function with No Arguments and No Return Value
function display() {
    console.log("HTML stands for Hyper Text Markup Language. | CSS stands for Cascading Style Sheet.");
    console.log("JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.");
}
display(); // Function Call or Function Invoke


console.log("**********  STEP-2 Function: personalDetails()  **********");

// Function with Arguments and No Return Value

function personalDetails(firstName, lastName, collegeName) { // Function Name: personalDetails()  
    console.log("First Name:", firstName, "Last Name:", lastName, "College Name:", collegeName);
}
personalDetails("Anupama", "Mundhe", "MIT-College"); // Function Call or Function Invoke



console.log("**********  STEP-3 Function: swapValuesDude()  **********");
console.log("**********  Swaping Program  **********");

// Function with Arguments and No Return Value

function swapValuesDude(value1, value2) { // 3.1 Function Name: swapValuesDude()

    console.log("Before Swaping: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swaping: ", value1, value2);
}
swapValuesDude("Virat", "Anushka"); // 3.2 Function call or Function invoke
swapValuesDude(1000, 2000); // 3.3 Function call or Function invoke


console.log("**********  STEP-4 Function: addThreeValues()  **********");
console.log("**********  Addition Program  **********");

// Function with Arguments and Return Value

var num1 = 10.23;
var num2 = 600;
var num3 = 40;

var str1 = "Hello";
var str2 = "Good";
var str3 = "Morning";

function addThreeValues(value1, value2, value3) { // 4.1 Function Name: addThreeValues()

    // var value1 = num1, var value2 = num2, var value3 = num3
    // var value1 = str1, var value2 = str2, var value3 = str3

    console.log("Before Addition: ", value1, value2, value3);
    var addition = value1 + value2 + value3;
    console.log("After Addition: ", addition);
    return "Addition of three variables successfully completed";
}

var addResult1 = addThreeValues(num1, num2, num3); // 4.2 Function call or Function invoke
console.log(addResult1);

var addResult2 = addThreeValues(str1, str2, str3); // 4.3 Function call or Function invoke
console.log(addResult2);