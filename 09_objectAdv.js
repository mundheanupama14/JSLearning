const employee = {
    id : 124567,
    name : "Elon Musk",
    country : "US",
    city : "Silicon Valley"
}

console.log(" ===== in operator =====");
const isIdAvailable = "id" in employee;
console.log(isIdAvailable);

console.log(" =====Object traversing =====");
for (const key in employee) {
      if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
        
    }
}
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

const valueOfEmployee = Object.values(employee);
console.log(valueOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee); // array of key and value
console.log(entriesOfEmployee[0]); //pair at 0th index
console.log(entriesOfEmployee[0][0]); //key of 0th element
console.log(entriesOfEmployee[0][1]);// value of 0th element