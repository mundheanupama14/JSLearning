class Bank {
    
    constructor(bankName, location, account, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}
const sbiBank = new Bank("SBI Bank", "Wakad", "621458793", "SBIIN004598", 10.75);
console.log(sbiBank);

const axisBBank = new Bank("Axis Bank", "Bajirao Road", "688789573215", "AXIS84764", 12.5);
console.log(axisBBank);



class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubha m Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);
