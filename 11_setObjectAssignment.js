console.log("     ************************* Set Of Objects Assignment *************************");

class Bank { // STEP-1 Create a class "Bank" with Data Members

    constructor(bankName, location, accountNo, ifsc, interestRate) { // STEP-A Initialize Data Members of class By Using Constructor
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}

console.log(`***************** Objects ctrated for All Banks, By using Class - "Bank" ***************`);
const axisBank = new Bank("AXIS Bank", "Pune", "AXIS123456", "AXISN008476", 12.5); // STEP-B Created Objects of class - "Bank"
console.log(axisBank);

const sbiBank = new Bank("SBI Bank", "Mumbai", "SBI7890123", "SBIN004598", 10.75); 
console.log(sbiBank);

const iciciBank = new Bank("ICICI Bank", "Delhi", "ICICI536790", "ICICIN006482", 10);
console.log(iciciBank);

const kotakBank = new Bank("KOTAK Bank", "Banglore", "KOTAK843215", "KOTAKN004596", 8);
console.log(kotakBank);

const hdfcBank = new Bank("HDFC Bank", "Hydrabad", "HDFC642381", "HDFCN004592", 6.50);
console.log(hdfcBank);

const panjabBank = new Bank("PANJAB Bank", "Chennai", "PANJAB987654", "PANJABN004282", 5);
console.log(panjabBank);

console.log(`      ****************** Adding All Object Elements in a Set ******************`);

const setOfBanks = new Set(); // STEP-C Add All Object Elements in a Set
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(panjabBank);

console.log(setOfBanks);
console.log(`                                                                   `);

console.log(`******** Traverse this Set Using 'For Of Loop' And Log on console - Bank Name and Location *******`);

for (const element of setOfBanks) { // STEP-C Set Traversing Using "for of loop"

    //console.log(element);
    console.log(`Bank Name: ${element.bankName}, Location: ${element.location}`);
}
