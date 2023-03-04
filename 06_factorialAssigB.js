console.log("*********** Actual-EXpected Assignment Program of 06_factorialAssigB ***********");

function factorialOfWordsCount(str) {

    if (str == null || str == undefined || isNaN(str) && typeof str == "number") {

        console.log(`Given String ${str} Is Invalid`);
    }
    else {

        console.log(`Given String Is: ${str}`);

        let word = str.split(" ");
        const totalWords = word.length;
        console.log(`Toatal number of words in Given String: ${str} Is: ${totalWords}`);

        // 6! -> 6*5*4*3*2*1 = 120
        let factorial = 1; // 120
        for (let index = totalWords; index >= 1; index--) { // 4

            factorial = factorial * index;
        }
        // console.log(`Factorial of ${str} is ${factorial}`);
        return `Factorial of ${str} is ${factorial}`;
    }
}
var result = factorialOfWordsCount("Revision is the mother of Success");
console.log(result);
var result = factorialOfWordsCount("We never fail, we always learn");
console.log(result);
var result = factorialOfWordsCount(null);
//console.log(result);
var result = factorialOfWordsCount("");
console.log(result);
var result = factorialOfWordsCount("Anupama Ashok Mundhe");
console.log(result);



// function factorialOfWordsCount(word) {

//     let count = 1;
//     let factorial = 1;

//     console.log(`The String is: ${word}`);

//     if (word == null || word == undefined) {

//         console.log(`Please enter the valid input ${word} is Invalid`);
//     }
//     else {

//         for (let index = 0; index <= word.length; index++) {
//             var char = word.charAt(index)
//             if (char == " ") {
//                 count = count + 1;
//                 factorial = factorial * count;
//             }
//         }
//         return factorial;
//     }
// }
// var result = factorialOfWordsCount("Revision is the mother of Success");
// console.log(`Total numbers of words available in the string and its factorial is:${result}`);
// var result = factorialOfWordsCount("We never fail, we always learn");
// console.log(`Total numbers of words available in the string and its factorial is:${result}`);
// var result = factorialOfWordsCount(null);
// //console.log(`Total numbers of words available in the string and its factorial is:${result}`);
// var result = factorialOfWordsCount("");
// console.log(`Total numbers of words available in the string and its factorial is:${result}`);
// var result = factorialOfWordsCount("Anupama Mundhe");
// console.log(`Total numbers of words available in the string and its factorial is:${result}`);
