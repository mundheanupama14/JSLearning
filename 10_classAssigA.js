console.log("***** STEP-1 Define a Class for Vehicle which should contains Data Members, Construcror *****");

class Vehicle {
    constructor(companyName, vehicleColor, type, price, speed, engine) {
        this.companyName = companyName;
        this.vehicleColor = vehicleColor;
        this.type = type;
        this.price = price;
        this.speed = speed;
        this.engine = engine;

    }
}
const kiyaCar = new Vehicle("Kiya", "White", "Car-4 Wheeler", "Rs.12,74,598/-", "Max-100kmph", "1 Diesel Engine and 2 Petrol Engine");
console.log(kiyaCar);

const fordCar = new Vehicle("Ford", "Black", "Car-4 Wheeler", "Rs.20,65,999/-", "Max-80kmph", "7.3L OHV PFI gas V8 Engine");
console.log(fordCar);

const bmwCar = new Vehicle("BMW", "Gray", "Car-4 Wheeler", "Rs.1,0074,500/-", "Max-90kmph, 200 MPH", "inline-six (straight-six) Engine");
console.log(bmwCar);

const ferrariCar = new Vehicle("Ferrari", "Navy-Blue", "Car-4 Wheeler", "Rs.95,75,999/-", "Max-75kmph", "standard V12 Rolls-Royce Engine");
console.log(ferrariCar);

const teslaCar = new Vehicle("Tesla", "Red", "Car-4 Wheeler", "Rs.85,55,999/-", "Max-70kmph", "Electric Motors, Not Use Engine");
console.log(teslaCar);


const arrayOfVehicle = [kiyaCar, fordCar, bmwCar, ferrariCar, teslaCar];

for (let index = 0; index < arrayOfVehicle.length; index++) {
    const element = arrayOfVehicle[index];
    //console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
}

//traversing array using for of loop
for (const element of arrayOfVehicle) {
    console.log(`${element.companyName}, ${element.vehicleColor}, ${element.type}, ${element.price}, ${element.speed}, ${element.engine}`);
}


console.log("***** STEP-2 Define a Class for College which must contains Data Members, Construcror *****");

class College {
    constructor(collegeName, university, department, location, teacherStaff) {
        this.collegeName = collegeName;
        this.university = university;
        this.department = department;
        this.location = location;
        this.teacherStaff = teacherStaff;

    }

}

const college1 = new College("COEP", "PUNE University", "E&TC Engg.", "Pune", 20);
console.log(college1);
const college2 = new College("JNEC", "BAMU University", "CSE Engg.", "Aurangabad", 15);
console.log(college2);
const college3 = new College("KIT", "Kolhapur University", "Civil Engg.", "Kolhapur", 25);
console.log(college3);
const college4 = new College("SGGS", "Amravati University", "Mechanical Engg.", "Amravati", 10);
console.log(college4);

console.log("***** STEP-3 Write a function -> traverseObject() To Traverse the Object *****");

const traverseObject = function (argument) {
    for (const key in argument) {
        if (Object.hasOwnProperty.call(argument, key)) {
            const element = argument[key];
            console.log(`${key}: ${element}`);
        }
    }
}
traverseObject(college1);
traverseObject(college2);
traverseObject(college3);
traverseObject(college4);

console.log("***** STEP-4 WAP To check whether the Given Number 11 is 'Prime Number' or 'NOT Prime Number'****");

function isPrime(num) {

    if (num < 2)
        return `${num} is NOT a Prime`;

    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            return `${num} is NOT a Prime Number`;
        }

    }
    return `${num} is a Prime Number`;
}
console.log(isPrime(11));
console.log(isPrime(12));
