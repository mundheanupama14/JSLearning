console.log("****************** Map Of Objects Assignment - Map hands on for Objects ******************");

class Bank { // STEP-1 Create a class "Bank" with Data Members

    constructor(bankName, location, accountNo, ifsc, interestRate) { // STEP-A Initialized Data Members of class By Using Constructor
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

console.log(`************** Created a Map in such a way that 'Key' should be "accountNo" **************`);
console.log(`    ************** And 'Value' is "Objects" that is ctrated in STEP-B **************`);

const mapOfBanks = new Map(); // STEP-C Created a Map in such a way that 'Key' should be "accountNo"
mapOfBanks.set("AXIS123456", axisBank); // And 'Value' is "Objects" that is ctrated in STEP-B
mapOfBanks.set("SBI7890123", sbiBank);
mapOfBanks.set("ICICI536790", iciciBank);
mapOfBanks.set("KOTAK843215", kotakBank);
mapOfBanks.set("HDFC642381", hdfcBank);
mapOfBanks.set("PANJAB987654", panjabBank);

console.log(mapOfBanks);
console.log(`                                                                   `);

//const keysOfMap = mapOfBanks.keys();
//console.log(keysOfMap);

const valuesOfMap = mapOfBanks.values();
console.log(valuesOfMap);


console.log(`        ****************** Traverse this MAP Using 'For Of Loop' *****************`);
console.log(`**************** And Log on console - Bank Name, Account No and Interest Rate ***************** `);

const element = mapOfBanks.get("AXIS123456")
const keysOfMap = mapOfBanks.keys();

for (const key of keysOfMap) { // STEP-C Map Traversing Using "for of loop"
    
    const element = mapOfBanks.get(key);
    //console.log(key,element);
    console.log(`Bank Name: ${element.bankName}, Account No: ${element.accountNo}, Interest Rate: ${element.interestRate}`);
}
