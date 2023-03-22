console.log(`************ Map Methods Assignment B ************`);

class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
      this.empId = empId;
      this.empName = empName;
      this.empDept = empDept;
      this.empSalary = empSalary;
      this.empCompany = empCompany;
    }
  }
  const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
  const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const empVinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");

  const arrayEmployee=[ empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi];

  console.log(`************** STEP-1 **************`);
const arrayName=arrayEmployee.map((employee)=>{
return employee.empName
})
console.log(`The List of Employee Name: ${arrayName}`);

console.log(`************** STEP-2 **************`);
const arrayDept=arrayEmployee.map((employee)=>{
return employee.empDept
})
console.log(`The List of Employee Dept: ${arrayDept}`);

console.log(`************** STEP-3 **************`);
const arrayID=arrayEmployee.map((employee)=>{
return employee.empId;
})
console.log(`The List of Employee ID: ${arrayID}`);

console.log(`************** STEP-4 **************`);
const arrayTransformed = [];
const arrayCompany=arrayEmployee.map((employee)=>{
if (employee.empCompany=="TCS") {
    arrayTransformed.push(employee.empName);
}
})
console.log(`The List of Employee Name working In TCS Company : ${arrayTransformed}`);