console.log("************* STEP-1 **************");

var countVowels = function (str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            count = count + 1;
        }
    }
    return count;
}
var result = countVowels("JavaScript is the language Of Internet");
console.log(`Total number of Vowels present in the string "JavaScript is the language Of Internet" is: ${result}`);

var result = countVowels("I am Angular Developer");
console.log(`Total number of Vowels present in the string "I am Angular Developer" is: ${result}`);

var result = countVowels("Hard work and commitment is the key of success");
console.log(`Total number of Vowels present in the string "Hard work and commitment is the key of success" is: ${result}`);


console.log("************* STEP-2 **************");

function lastWordCharsCount(str) {
var count = 0;
    for (let index = str.length - 1; index >= 0; index--) {

        var char = str.charAt(index); // o
        if (char == " ") {
            break;
        }
        count = count + 1;
        }
        return count;
}
    
var result = lastWordCharsCount("JavaScript is the language Of Internet");
console.log(`Total number of character in the last word of string "JavaScript is the language Of Internet" is: ${result}`);

var result = lastWordCharsCount("I am Angular Developer");
console.log(`Total number of character in the last word of string "I am Angular Developer" is: ${result}`);

var result = lastWordCharsCount("Hard work and commitment is the key of success");
console.log(`Total number of character in the last word of string "Hard work and commitment is the key of success" is: ${result}`);
