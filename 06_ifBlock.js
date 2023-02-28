console.log(`Start`);
var num = 10;
if (num >= 0) {

    console.log(`Inside if : `);
    console.log(`Number is Positive : ${num}`);
}
console.log(`End`);


var ageForVote = 10;
if (ageForVote >= 18) {

    console.log("You are Eligible for Voting");
    console.log(`Age is : ${ageForVote}`);
}
console.log("End of next if Block");


function checkEvenOdd(num) {

    if (num % 2 == 0) {
        return "EVEN";
    }
    if (num % 2 != 0) { // OR We can also write condition as: if(num%2==1)
        return "ODD"
    }

}
var result = checkEvenOdd(45);
console.log(`Given Number 45 Is: ${result}`);
var result = checkEvenOdd(70);
console.log(`Given Number 70 Is: ${result}`);


var num1 = 5;
if (num1 > 0) {
    console.log(`Number ${num1} is Positive`);
} else {
    console.log(`Number ${num1} is Negative`);
}

function maleMarriageEligibility(gender, age, boyName) {
    if (gender == "Male" && age >= 21) {
        console.log(`You are Eligible`);
    } else {
        console.log(`Not Eligible`);
    }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");

