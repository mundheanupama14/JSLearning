console.log("**************** STEP-1 ****************");

function voteEligibility(age) {

    if (age <= 0 || age >= 120 || age == undefined || age == null) {

        console.log(`Invalid Data ${age} Please enter the Valid Data`);
    }

    if (age >= 18 && age <= 120) {

        console.log(`Your age is ${age} He or She is Eligible for Voting`);
    }
    if (age > 0 && age < 18) {

        console.log(`Your age is ${age} He or She is NOT Eligible for Voting`);
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);


console.log("**************** STEP-2 ****************");

function gradeCalculation(marks) {

    if (marks <= 0 || marks > 100 || (typeof marks!="number") || marks != marks || marks == null) {

        console.log(`Please provide the valid marks: ${marks}`);
    }

    if (marks >= 90) {

        console.log(`Funtastic Marks: ${marks}, Your grade is A+`);
    }
    if (marks >= 75 && marks < 90) {

        console.log(`Excellent Marks: ${marks}, Your grade is A`);
    }

    if (marks >= 50 && marks < 75) {

        console.log(`Good Marks: ${marks}, Your grade is B`);
    }

    if (marks >= 35 && marks < 50) {

        console.log(`Marks Is: ${marks}, Your grade is C, Need Improvement`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);

