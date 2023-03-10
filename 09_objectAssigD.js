// Create an Object with a name -> Professor

//console.log("STEP-1. Think of All the Properties that you could add (Add Minimum 5 Properties)");

let professor = {
    professorID: 1122,
    professorName: "Sachin Khandare",
    mobileNumber: 9876543210,
    professorDept: "Computer Science And Engineering",
    isWorking: true,
    isMarried: true,
    professorAge: 40,
    collegeName: "COEP",
    city: "Pune",
    address: "Wakad Pune",

    //console.log("STEP-2. Also include object 'degrees' like Engineering: 'CSC', PHD: 'Adv Computing And few More");

    degrees: {
        engineering: "CSE",
        PHD: "Advance Computing",
        science: "BCA",
        commorce: "B.Com",
        arts: "BA",
    },

    // console.log(`STEP-3. Also add one array -> 'Certificates' with his certificates like 'Hacker Rank Participation',
    // 'Certificate in IFE course', 'Certificate in Adv Programming'`);

    certificates: ["Hacker Rank Participation", "Certificate in IFE Course", "Certificate in Advance Programing"],

    //console.log(`STEP-4. Add function as a Value which should Concat All Degrees in STEP-2,
    //Please return as string, and log on console with - Teacher degrees are Total degrees are:`);

    display : function () {
        this.degrees
        return `Teacher Degrees are: engineering ${this.degrees.engineering}, PHD ${this.degrees.PHD}, science ${this.degrees.science}, commorce ${this.degrees.commorce}, arts ${this.degrees.arts}`;
    },

// console.log(`STEP-5 Try to Add New Property like totalExperience "14 Years" and log on console);
   
totalExperience: "14 Years",

};
console.log(`STEP-1`);
console.log(professor);

console.log(`STEP-2`);
console.log(professor.degrees);

console.log(`STEP-3`);
console.log(professor.certificates);

console.log(`STEP-4`);
let resultDegrees = professor.display(); //call concatenated function
console.log(resultDegrees);
console.log(`Total Degrees are: 5`);

console.log(`STEP-5`);
console.log(`Total Experiance is: ${professor.totalExperience}`);

//console.log(`STEP-6. Modify any existing property and log complete object on console`);
console.log(`STEP-6`);
professor.degrees.engineering = "Mechanical Engineerig";
console.log(professor.degrees);

//console.log(`STEP-7. Add one New Certificate -> "Oracle Certified" at the End of Array -> Certificates`);
console.log(`STEP-7`);
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);

//console.log(`STEP-8. Log the Last Element of the Array Certificates`);
console.log(`STEP-8`);
console.log(professor.certificates[professor.certificates.length-1]);
