// Old way to log value on console 

console.log("You are Champ man...");

// console.log("You are "Champ" man..."); // To write "Champ" string in double quote it gives errore. 
// To resolve this problem of string "Champ" we use bactic->(``) i.e String Template

// New way to log value on console by Using String Template.

console.log(`You are "Cham" man...`);

// String Tempalte also improve the readability of code. 
// i.e By using String Template, Code is written in more readable format.(`My First Name` ${firstName});

var firstName = "Mohit";
var lastName = "Sharma";
var city = "Pune";

console.log("My First Name:", firstName, "My Last Name:", lastName, "My City:", city); // Old way to log on console

console.log(`My First Name: ${firstName} My Last Name: ${lastName} My City: ${city}`); // New way to log on console By using String Template
