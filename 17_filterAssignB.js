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

const arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi];
console.log(arrayEmployee);

const arrayOfTcsEmp = arrayEmployee.filter((employee) =>
    employee.empCompany === "TCS").map((employee) => employee.empCompany)
console.log(arrayOfTcsEmp);

const arrayOfTcsEmpl = arrayEmployee.filter((Employee) =>
    Employee.empCompany === "TCS").map((Employee) => Employee.empCompany)
console.log(arrayOfTcsEmp);

console.log(" ");
console.log(`************ STEP-2 Average Salary of Employee Working `);

