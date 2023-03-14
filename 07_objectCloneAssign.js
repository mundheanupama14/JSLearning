console.log("********* Shallow Clone, Deep Clone, Merge Operation And Deep copy Using JSON.stringfy() *********");

const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(`Given Array Is: ${arrayNums}`);

console.log(`********** STEP-1 Perform Shallow Clone on arrayNums, Update cloned array with values -> 55,66 using push() and Log Original and Cloned Array on Console **********`);

console.log(`Original Array Is: ${arrayNums}`);

const newArrayNums = arrayNums; // Shallow Clone
newArrayNums.push(55);
newArrayNums.push(66);
console.log(`Updated Cloned Array Is: ${newArrayNums}`);

console.log(`********** STEP-2 Perform Deep Clone Using Spread Operator, Update Original Array i.e. arrayNums with Values 10, 25 at Last Position and Log Original and Cloned Array on Console **********`);

const deepArrayNums = arrayNums; // Deep Clone
console.log(`Original Deep Cloned Array Is: ${deepArrayNums}`);
deepArrayNums.push(10);
deepArrayNums.push(25);
const deepClonedArray = [...arrayNums];
console.log(`Deep Clone Using Spread Operator ... Is: ${deepClonedArray}`);

console.log("******** STEP-3 Merge or Concat Two array arrayNums And arrayEven Using Spread Operator()...******");

const arrayEven = [2, 30, 14, 8]
console.log(`Given Other Array Is: ${arrayEven}`);

console.log(`Original Array Is: ${arrayNums}`);

// Merge or Concat Two array arrayNums And arrayEven Using Spread Operator()...
const mergedArray = [...arrayNums, ...arrayEven];
console.log(`Merged or Concat Array Using Spread Operator()... Is: ${mergedArray}`);

console.log("********** STEP-4 Create the employee_info Object as shown in Snippet **********");

const employeeInfo = {
    empId: 27,
    empName: "John Doe",
    salary: {
        julyMonth: "40,0000INR",
        augMonth: "50,0000INR",
        juneMonth: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokali, 431202",
        },
        city: "Mumbai",
        state: "Maharastra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}

console.log(employeeInfo);
console.log(`Employee Information: Employee Id: ${employeeInfo.empId}, Employee Name: ${employeeInfo.empName}`);

console.log(`********** STEP-5 Log the Employee Details on console like, ***********`);

console.log("*********** STEP-5.1 a) Adderss: Locality, City, State, Country **********");

console.log(`Employee Address: Locality -> Colony: ${employeeInfo.address.locality.colony}, Street: ${employeeInfo.address.locality.street},
City: ${employeeInfo.address.city}, State: ${employeeInfo.address.state}, Country: ${employeeInfo.address.country}`);

console.log("*********** STEP-5.2 b) Mobile Numbers **********");
console.log(`Mobile Numbers: ${employeeInfo.mobiles}`);

console.log(`********** STEP-6 Perform Deep Copy Using JSON,stringfy() **********`);

const newEmployeeInfo = JSON.parse(JSON.stringify(employeeInfo));
newEmployeeInfo.salary.julyMonth = "80,0000INR"; // STEP - 6 a)
newEmployeeInfo.address.country = "United Kingdom"; // STEP - 6 b)

console.log(`********** STEP-6 c) Log - Updated Values for Original and Cloned Object on Console **********`);
console.log(`Original Salary: ${employeeInfo.salary.julyMonth}`); // employeeInfo
console.log(`Updated Salary: ${newEmployeeInfo.salary.julyMonth}`); // newEmployeeInfo

console.log(`Original Country: ${employeeInfo.address.country}`); // employeeInfo
console.log(`Updated Country: ${newEmployeeInfo.address.country}`); // newEmployeeInfo
