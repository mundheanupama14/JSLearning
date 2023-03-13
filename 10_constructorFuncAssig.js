console.log("********** Object creation with the help of Constructor Function **********"); // STEP-1

function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    console.log(`Bank Details: Bank Name: ${this.bankName} Location: ${this.location} IFSC Code: ${this.ifscCode} Branch Code: ${this.branchCode} `);
}

const yesBank = new Bank("YES Bank", "Pune", "YESN001234", "YES1122"); // STEP-2
//console.log(`Bank Details: Bank Name: ${this.bankName} Location: ${this.location} IFSC Code: ${this.ifscCode} Branch Code: ${this.branchCode}`);
const sbiBank = new Bank("SBI Bank", "Mumbai", "SBIN009876", "SBI3344");
//console.log(sbiBank);
const mahaBank = new Bank("Maharastra Bank", "Delhi", "MAHA7843", "MAHA5566");
const axisBank = new Bank("AXIS Bank", "Hydrabad", "AXISN006578", "AXIS7788");

console.log("********** Adding the Data Members openTime and closeTime on Prototype Object **********"); // STEP-3

Bank.prototype.openTime = "9 AM IST"; //  STEP-3
Bank.prototype.closeTime = "6 PM IST"; // STEP-4
console.log(`Bank Opening Time: ${Bank.prototype.openTime}`);
console.log(`Bank Closing Time: ${Bank.prototype.closeTime}`);

console.log(`SBI Bank Open Time: ${sbiBank.openTime}, SBI Bank Close Time: ${sbiBank.closeTime}`); // STEP-5
console.log(`Bank Name: ${axisBank.bankName}, AXIS Bank Close Time: ${axisBank.closeTime}`); // STEP-6
console.log(`Bank Name: ${yesBank.bankName}, YES Bank Branch Code: ${yesBank.branchCode}, YES Bank Open Time: ${yesBank.closeTime}`); // STEP-7