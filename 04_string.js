var greet = "Good Morning";
console.log(typeof greet);

console.log("Total number of characters available into this string variable - greet");
var greetLength = greet.length;
console.log("Total length of string is:", greetLength);

console.log("Find the character by Index value");
var charAtIndex3 = greet.charAt(3);
console.log("Character available at Index 3 is:", charAtIndex3);

console.log("Find the last character");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last char is:", charAtLastIndex);

console.log("Find the Index by character value");
var indexOfM = greet.indexOf('M');
console.log("Index of character M is:", indexOfM);

console.log("Index of character which is not available into the string:", greet.indexOf('z'));

console.log("Index of o character:", greet.indexOf('o'));
console.log("Index of o character using lastIndexOf():", greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning", "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Lower Case:", replaceResult.toLowerCase());


var myName = "  Mohit  Sharma      ";
var myNameAfterTrim = myName.trim(); //Mohit Sharma
console.log("Removing Extra Start and End spaces using trim():", myNameAfterTrim, myName.length, myNameAfterTrim.length);

// Find the Total Extra spaces Removed from the string - myName
var count = myName.length - myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(), myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet  or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() methode");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);
greet.slice(2,5);

console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);


console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";

console.log("split() method");
var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var splitResult = myFriendList.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);
console.log("Total words: ", myFriendList.length);