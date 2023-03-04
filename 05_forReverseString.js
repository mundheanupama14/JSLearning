var reverseString = function (str) {
    var reverse = ""; // w
    for (let index = str.length - 1; index >= 0; index--) { // 9

        var charAt = str.charAt(index);
        reverse = reverse + charAt; // "w"

    } // Here we not return the value of reverse so that it gives result as,undefined
    // undefined - Because here we not use return keyword to return value of reverse
}
var result = reverseString("Do it anyhow");
console.log(`Reverse String Is: ${result}`);



var reverseStr = function (str) {
    var reverse = ""; // wo
    for (let index = str.length - 1; index >= 0; index--) { // 9

        var charAt = str.charAt(index);
        reverse = reverse + charAt; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow");
console.log(`Reverse String Is: ${result}`);



var reverseStr = function (str) { // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length - 1; index >= 0; index--) {
        var char = str.charAt(index); // o
        if (char == " ") {
            break;
        }
        reverse = reverse + char; // "w"+"o" ==> wo
    }
    return reverse;
}
var result = reverseStr("Do it anyhow");
console.log(`Reverse Last Word: ${result}`);



// "I am Angular champ"
var str = "I am Angular  champ"
var count = 0;

for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);

    if (char == " ") {
        count = count + 1;
    }
}
console.log(`Total number of Spaces in the given string is: ${count}`);



// "I am Angular champ"
var str = "I am Angular  champ"
var count = 0;

for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index)

    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        count = count + 1;
    }
}
console.log(`Total number of Vowels (a,e,i,o,u) in the given string is: ${count}`);



var firstWordLength = function (strGiven) { // "Focus is the key"
    var firstWord = ""; // Focus

    for (let index = 0; index < strGiven.length; index++) {
        var char = strGiven.charAt(index); // " "
        firstWord = firstWord + char; // "F"+"o"

        if (char == " ") {

            break;
        }

    }
    return firstWord;
}
var firstWord = firstWordLength("Focus is the key");
console.log(`First Word -> ${firstWord} length is: ${firstWord.length}`);