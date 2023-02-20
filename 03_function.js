// Function with No Arguments and No Return Value
function showFullName() {
    console.log("My Full Name Is: Anupama Mundhe");
}
showFullName(); // Function Call or Function Invoke


// Function with Arguments and No Return Value
function showAge(age) {
    console.log("My Age Is:", age);
}
showAge(32); // function Call or Function Invoke


// Function with No Arguments and Return Value
function fullName() {
    var name = "Gajanan Kharat";
    return name;
}
var fName = fullName(); // Functio call OR Function invoke 
console.log(fName);


// Function with Arguments and Return Value
function sumOfNumbers(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}
var sumResult = sumOfNumbers(10, 45, 79.56); // Functio call OR Function invoke
console.log(sumResult);



// First Program Function with Arguments and No Return Value

var num1 = 100;
var num2 = 200;

function swapVariables(value1, value2) {

    // var value1 = num1, var value2 = num2

    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
}
swapVariables(num1, num2); //Function call or Function invoke


// Second Program Function with Arguments and Return Value

var num1 = 600;
var num2 = 800;

var str1 = "Nayan Patil";
var str2 = "Vedika Deshmukh";

function swapVariables(value1, value2) {

    // var value1 = num1, var value2 = num2
    // var value1 = str1, var value2 = str2

    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
}

var swapResult = swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2); // Function call or Function invoke
console.log(swapResult2);


// Thired Program Function with Arguments and Return Value

function display(num){
    console.log(num); //100
    var result = typeof num; //number
    return result; 
}
var displayResult = display(100);
console.log(displayResult); // 