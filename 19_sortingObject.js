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

console.log("********** Before Sorting **********");
arrayEmployee.forEach((employee) => {
    console.log(employee);
});

arrayEmployee.sort((emp1, emp2) => {
    return emp1.empId > emp2.empId ? 1 : -1;
});

console.log("************ After Sorting **************");
arrayEmployee.forEach((employee) => {
    console.log(employee.empId, employee.empName, employee.empDept);
});


console.log("*********** Assignment Work Of filter() and reduce() **********");

/* const arrayOfWipro = arrayEmployee.filter((employee) => {
    return employee.empCompany == "Wipro";
});

arrayOfWipro.forEach((employee) => {
    console.log(employee);
}); */


const arrayOfWipro = arrayEmployee.filter((employee) => {
    return (employee.empCompany == "Wipro" || employee.empCompany == "Infosys");
});

const totalSalary = arrayOfWipro.reduce((runningTotal, element) => {
    return runningTotal + element.empSalary;
}, 0 );

console.log(totalSalary);
console.log(totalSalary/arrayOfWipro.length);

arrayOfWipro.forEach((employee) => {
    console.log(employee);
});