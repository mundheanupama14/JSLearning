console.log("****************** STEP-1 ******************");

console.log("*** Find The TCS Interview Eligibility Criterea ***");

// Function with Three 4 Argument and No Return Value

function tcsInterviewEligibility(gradScore, hscScore, sscScore, candidateName){ // STEP-1.1 Function Name with Four Arguments
    if(gradScore >= 70 || hscScore >= 80 || sscScore > 90){

    console.log(`Congrates..! ${candidateName} you are Eligible for TCS Interview`);
    }
    else{
    console.log(`Unfortunately, ${candidateName} you are Not Eligible for TCS Interview`); 
    }
    // STEP-1.2 No Return Value
}
// Function Invoke or Functon Call with Values
tcsInterviewEligibility(80, 86, 90, "Anupama Mundhe"); // STEP-1.3.1 Function Call or Function Invoke
tcsInterviewEligibility(70, 65, 55, "Madhuri Chavhan"); // STEP-1.3.2 Passing Arguments Values
tcsInterviewEligibility(60, 79, 88, "Shalaka Deshmukh"); // STEP-1.3.3 Passing Parameter Values