console.log("****************** STEP-1 ******************");

console.log("*** Find The Eligibility Criteria For Marriage Of Boy ***");

// Function with Three 3 Argument and Return Value

function maleMarriageEligibility(gender, age, boyName) {
    var result = (gender == "Male" && age >= 21) ? `Hey ${boyName} you are Eligible for Marriage` : `Hey ${boyName} Sorry..! you are Not Eligible for Marriage`;
    return result;

}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);



console.log("****************** STEP-2 ******************");

console.log("*** Find The Eligibility Criteria For Marriage Of Girl ***");

// Function with Three 3 Argument and Return Value

function femaleMarriageEligibility(gender, age, girlName) {
    var result = (gender == "Female" && age >= 18) ? `Hey ${girlName} you are Eligible for Marriage` : `Hey ${girlName} Sorry..! you are Not Eligible for Marriage`;
    return result;

}
var result = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result);

var result = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result);
