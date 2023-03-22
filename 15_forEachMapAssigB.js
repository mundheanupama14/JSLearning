console.log(`************ For Each Map Assignment ************`);

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

const mapOfEmployee=new Map();
mapOfEmployee.set(empAnil.empId,empAnil);
mapOfEmployee.set(empRadha.empId,empRadha);
mapOfEmployee.set(empRishi.empId,empRishi);
mapOfEmployee.set(empSonali.empId,empSonali);
mapOfEmployee.set(empMonika.empId,empMonika);
mapOfEmployee.set(empMonika.empId,empVinay);
mapOfEmployee.set(empMahi.empId,empMahi);

mapOfEmployee.forEach((element) => {
    console.log(`${element.empId}===> Name:${element.empName} , Department: ${element.empDept}, Company: ${element.empCompany}, Salary: ${element.empSalary}`);
})