// 1.Variable Declaration 2.Variable Initialization 3.Variable Modification/Updation
// 4.Variable Re-Declaration 5.Scope & Accessibilities of Variable

var firstName; // Variable Declaration
firstName = "Virat"; // Variable Initialization

var lastName = "Kohali"; // Variable Declaration and Initialization in Same Line

firstName = "King Kohali"; // Variable Updation - We can Update the Variable Multiple Times

var firstName; // Variable Re-Declaration
console.log(firstName); // It gives Output as 'undefined' - firstName is 'undefined'

// If we want To Stop the Re-Declaration Issue then we Use the 'let' Keyword

let city = "Delhi"; // Variable Declaration and Initialization in Same Line

//let city; // Variable Declaration 
//city = "Delhi"; // Variable Initialization

// let city = "Mumbai"; // Not Allowed Variable Re-Declaration

// Once we Initialize or once we Assign the value to any cont Variable then,
// We can NOT Change, Modify or Re-Declare that Variable

const PI = 3.14;

// PI = 3.56; // Updation or Modify NOT Allowed
console.log(PI);

// const PI = 3.1412; // Re-Declaration of const Variable NOT Allowed

var num = 10;
if (num == 10){
    var word = "Revision is the mother of Success";
}
console.log(word);
