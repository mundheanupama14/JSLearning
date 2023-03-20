// Assignment 0B, 15_AssignB.js

class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");

const array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(array_employess);

// array_employess.push(emp_anil.emp_id, emp_anil.emp_name, emp_anil.emp_dept, emp_anil.emp_salary, emp_anil.emp_company);
// array_employess.push(emp_radha.emp_id, emp_radha.emp_name, emp_radha.emp_dept, emp_radha.emp_salary, emp_radha.emp_company);
// array_employess.push(emp_rishi.emp_id, emp_rishi.emp_name, emp_rishi.emp_dept, emp_rishi.emp_salary, emp_rishi.emp_company);
// array_employess.push(emp_sonali.emp_id, emp_sonali.emp_name, emp_sonali.emp_dept, emp_sonali.emp_salary, emp_sonali.emp_company);
// array_employess.push(emp_monika.emp_id, emp_monika.emp_name, emp_monika.emp_dept, emp_monika.emp_salary, emp_monika.emp_company);
// array_employess.push(emp_viny.emp_id, emp_viny.emp_name, emp_viny.emp_dept, emp_viny.emp_salary, emp_viny.emp_company);
// array_employess.push(emp_mahi.emp_id, emp_mahi.emp_name, emp_mahi.emp_dept, emp_mahi.emp_salary, emp_mahi.emp_company);
// console.log(`Array of Employee Details: ${array_employess}`);

console.log("********** STEP-1 Find All the Employees Working in 'TCS' Company **********");

for (const Employee of array_employess) {

    if (Employee.emp_company == "TCS") {

        console.log(`Employee Name: ${Employee.emp_name}, Company Name: ${Employee.emp_company}`);
    }
}

console.log("********** STEP-2 Find All the Employees of 'Finance Department' **********");

for (const Employee of array_employess) {

    if (Employee.emp_dept == "Finance") {

        console.log(`Employee Name: ${Employee.emp_name}, Department Name: ${Employee.emp_dept}`);
    }
}

console.log("********** STEP-3 Find All the Employees Whose Name Starts With 'R' Letter **********");

for (const Employee of array_employess) {

    if (Employee.emp_name.startsWith("R")) {

        // console.log(Employee);
        console.log(`Employee Id: ${Employee.emp_id}, Employee Name: ${Employee.emp_name}, Department: ${Employee.emp_dept}, Salary: ${Employee.emp_salary}, Company Name: ${Employee.emp_company}`);
    }
}

console.log("********** STEP-4 Find All the Employees whose Salary is Greater than > 75000 ********** ")

for (const Employee of array_employess) {

    if (Employee.emp_salary > 75000) {

        console.log(`Employee Name: ${Employee.emp_name}, Company Name: ${Employee.emp_company}, Salary: ${Employee.emp_salary}`);
    }
}

console.log("********** STEP-5 Find All the Employees whose Salary is Greater than or Equal >= 50000 And from 'IT' Department ********** ")

for (const Employee of array_employess) {

    if (Employee.emp_salary >= 50000 && Employee.emp_dept == "IT") {

        //console.log(Employee);
        console.log(`Employee Id: ${Employee.emp_id}, Employee Name: ${Employee.emp_name}, Department: ${Employee.emp_dept}, Salary: ${Employee.emp_salary}, Company Name: ${Employee.emp_company}`);
    }
}

console.log("********** STEP-6 Find All the Employees Working in 'Infosys' Company ********** ")

for (const Employee of array_employess) {

    if (Employee.emp_company == "Infosys") {

        //console.log(Employee);
        console.log(`Employee Id: ${Employee.emp_id}, Employee Name: ${Employee.emp_name}, Department: ${Employee.emp_dept}, Salary: ${Employee.emp_salary}, Company Name: ${Employee.emp_company}`);
    }
}
