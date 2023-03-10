let sbiBank = {
    bankName : "SBI Bank",
    location: "Narhe",
    account: 62514897564,
    ifsc: "SBIN0004598",
    interestRate: 10.75
}

let axisBank = {
    bankName: "Axis Bank",
    location: "Bajirao Road, Pune",
    account: 4597863258,
    ifsc: "AXIS4567893",
    interestRate: 12.5
}

let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Sinhgad road",
    account: 4593587569,
    ifsc: "HDFC000489",
    interestRate: 11.79
}

let yesBank = {
    bankName: "Yes Bank",
    location: "Kothrud Pune",
    account: 4568792581,
    ifsc: "YESB0214597",
    interestRate: 14.5,
}

const arrayOfBanks = [sbiBank, axisBank, hdfcBank, yesBank ];

for (let index = 0; index < arrayOfBanks.length; index++) {
    const element = arrayOfBanks[index];
    //console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
}

 //traversing array using for of loop
for (const element of arrayOfBanks) {
    console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
}
/*const array = [1, 2, 3, 4, 8, 9]  //for of loop
for (const element of array) {
    console.log(element);
}*/