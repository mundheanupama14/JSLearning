function factorialOfWordsCount(word){

    let count = 1;
    let factorial = 1;

    console.log(`The String is: ${word}`);

    if (word == null || word == undefined) {

        console.log(`Please enter the valid input ${word} is Invalid`);
    }
    else {

        for (let index = 0; index <= word.length; index++) {
            var char = word.charAt(index)
            if (char == " ") {
                count = count + 1;
                factorial = factorial * count;
            }
        }
        return factorial;
}
}
var result = factorialOfWordsCount("Revision is the mother of Success");
console.log(`Total numbers of words available in the string and its factorial is:${result}`);
var result = factorialOfWordsCount("We never fail, we always learn");
console.log(`Total numbers of words available in the string and its factorial is:${result}`);
var result = factorialOfWordsCount(null);
//console.log(`Total numbers of words available in the string and its factorial is:${result}`);
var result = factorialOfWordsCount("");
console.log(`Total numbers of words available in the string and its factorial is:${result}`);
var result = factorialOfWordsCount("Anupama Mundhe");
console.log(`Total numbers of words available in the string and its factorial is:${result}`);
