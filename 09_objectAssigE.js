const sbiBank = {
    bankName: "State Bank of India",
    location: "Wakad",
    accountNo: 3245617890,
    ifsc: "SBIN00976548",
    interestRate: 11.5,
    showDetails: function () {
        this.sbiBank;
        console.log(`SBI Bank Dtails are: Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Rate: ${this.interestRate}`);
    }
}
sbiBank.showDetails();

const axisBank = {
    bankName: "AXIS Bank",
    location: "Hinjewadi",
    accountNo: 9765417890,
    ifsc: "AXISN00345680",
    interestRate: 10,

    showDetails: function () {
        this.axisBank;
        console.log(`AXIS Bank Dtails are: Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Rate: ${this.interestRate}`);
    }
}
axisBank.showDetails();

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Katraj",
    accountNo: 2058976314,
    ifsc: "HDFCN0096314",
    interestRate: 8,
    showDetails: function () {
        this.hdfcBank;
        console.log(`HDFC Bank Dtails are: Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Rate: ${this.interestRate}`);
    }
}
hdfcBank.showDetails();

const yesBank = {
    bankName: "YES Bank",
    location: "Swargate",
    accountNo: 8679054321,
    ifsc: "YESN00234568",
    interestRate: 7,
    showDetails: function () {
        this.yesBank;
        console.log(`YES Bank Dtails are: Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Rate: ${this.interestRate}`);
    }
}
yesBank.showDetails();

// console.table(sbiBank);
// console.log(axisBank);
// console.table(hdfcBank);
// console.log(yesBank);