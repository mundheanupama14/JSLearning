function maleMarriageEligibility(gender, age, boyName) {

    if (age < 0 || age == undefined) { // true && false = false
        return `Hey ${boyName} your age ${age} is NOT Valid`;

    }
    if (gender == "Male" && age >= 21) {

        var str = `Hey ${boyName} you are Eligible for Marriage`;
        return str;
    }
    else {

        var str = `Hey ${boyName} you are NOT Eligible for Marriage`;
        return str;
    }
}
var result = maleMarriageEligibility("Male", 25, "Bilgates");
console.log(result);
var result = maleMarriageEligibility("Male", -30, "Shivam");
console.log(result);
var result = maleMarriageEligibility("Male", undefined, "Rajendra");
console.log(result);


function gradeCalculation(marks){

    // If marks is 0 or less than 0 or grater than 100 or not invalid number format
    // Ex. "56" or "Seventy" then log the message - Please provide the valid marks
    if (marks <= 0 || marks > 100 || (typeof marks != "number") || isNaN(marks) || marks == undefined || marks == null){

        console.log(`Please provides the valid marks - ${marks}`);
    }
}
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("91");
gradeCalculation("Seventy One");
gradeCalculation(NaN);
gradeCalculation(undefined);
gradeCalculation(null);
