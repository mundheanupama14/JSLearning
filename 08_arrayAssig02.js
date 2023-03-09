console.log("STEP-1. Find the total elements available or length and log on console");

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
let arrayNumbersLength = arrayNumbers.length;
console.log(`Total Elements Available or Length of Array Is: ${arrayNumbersLength}`);

console.log("STEP-2. Log the First element and Last element in arrayNumbers and log on console");

const valueAtIndex0 = arrayNumbers[arrayNumbers.length - 11];
console.log(`First element of an given Array is: ${valueAtIndex0}`);
const valueAtIndex10 = arrayNumbers[arrayNumbers.length - 1];
console.log(`Last element of an given Array is: ${valueAtIndex10}`);

console.log("STEP-3. Log the Third Last element using length property and log on console");

const valueAtIndex8 = arrayNumbers[arrayNumbers.length - 3];
console.log(`Third Last element of an given Array is: ${valueAtIndex8}`);

console.log("STEP-4. Find the All Even Numbers and log on console")

let count = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const evenelement = arrayNumbers[index];
    if (evenelement % 2 == 0) {
        console.log(`Even Number of Array is: ${evenelement}`);
        count.push(evenelement);
    }
}
console.log(`All Even Number of Array is: ${count}`);

console.log("STEP-5. Find the All Odd Numbers and log on console");

count = [];
let index = 0;
while (index < arrayNumbers.length) {
    const oddelement = arrayNumbers[index];
    if (oddelement % 2 != 0) {
        console.log(`Odd Number of Array is: ${oddelement}`);
        count.push(oddelement);
    }
    index++;
}
console.log(`All Odd Number of Array is: ${count}`);

console.log("STEP-6. Find All the Even Positioned elements from arrayNumbers, Sum it and log on console");

count = [];
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index % 2 == 0) {
        console.log(`Even Positioned Element of Array is: ${element}`);
        count.push(element);
        sum = sum + element;
    }
}
console.log(`All Even Positioned Element of Array is: ${count}`);
console.log(`Sum of All Even Positioned Element is:${sum}`);

console.log("STEP-7. Find All the Odd Positioned elements from arrayNumbers, Sum it and log on console");

count = [];
sum = 0;
index = 0;
while (index < arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (index % 2 != 0) {
        console.log(`Odd Positioned Element of Array is: ${element}`);
        count.push(element);
        sum = sum + element;
    }
    index++;
}
console.log(`All Odd Positioned Element of Array is: ${count}`);
console.log(`Sum of All Even Positioned Element is:${sum}`);

console.log("STEP-8. Find the Sum of All elements from arrayNumbers, and log on console");

sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element;
}
console.log(`Sum of an Array element is: ${sum}`);

console.log("STEP-9. Find the numbers which are Multiple of 5, and log on console");

count = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0) {
        console.log(`Multiple of 5, Element is: ${element}`);
        count.push(element);
    }
}
console.log(`All Multiple of 5, Element is: ${count}`);

console.log("STEP-10. Is number 115 is available in arrayNumbers and log on console");

const is115Available = arrayNumbers.includes(115);
console.log(`Is 115 Available: ${is115Available}`);

console.log("STEP-11. Is number 23 is available in arrayNumbers and log on console");

const is23Available = arrayNumbers.includes(23);
console.log(`Is 23 Available: ${is23Available}`);

console.log("STEP-12. Insert numbers -> 55,66 Before index 3 and log array on console");

arrayNumbers.splice(3, 0, 55, 66);
console.log(`Insert Numbers -> 55,66 Updated Array Is: ${arrayNumbers}`);

console.log("STEP-13. Delete 3 elements Starting from index 4 and log arrayNumbers on console");

const splicedArrayWithDeleteCount = arrayNumbers.splice(4, 3);
console.log(`Delete 3 elements from index 4 Updated Array Is: ${arrayNumbers}`);
