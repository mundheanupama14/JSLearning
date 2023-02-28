console.log("****************** STEP-1 ******************");

console.log("*** Find The Eligibility Criteria For Marriage Of Boy ***");

// Function with Three 3 Argument and Return Value

function maleMarriageEligibility(gender, age, boyName) {

    if (gender == "Male" && age >= 21) {

        console.log(`Hey ${boyName} you are Eligible for Marriage`);
        
    } else {

        console.log(`Hey ${boyName} Sorry..! you are Not Eligible for Marriage`);
    }

}
maleMarriageEligibility("Male", 25, "Billgates");

maleMarriageEligibility("Male", 17, "Stew Jobs");



console.log("****************** STEP-2 ******************");

console.log("*** Find The Eligibility Criteria For Marriage Of Girl ***");

// Function with Three 3 Argument and Return Value

function femaleMarriageEligibility(gender, age, girlName) {
    if(gender == "Female" && age >= 18){

        console.log(`Hey ${girlName} you are Eligible for Marriage`);

    }
    else{

    console.log(`Hey ${girlName} Sorry..! you are Not Eligible for Marriage`);
    } 
}
 femaleMarriageEligibility("Female", 16, "Jenifer");
 
 femaleMarriageEligibility("Female", 27, "Malinda Gates");

