const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given Array Is:`);
console.log(arrayNumbers);


console.error(`STEP-1 Find out All the Numbers which are greater than 50 and log on console`);
const arrayResult = arrayNumbers.filter((element) => {
return element > 50;
});
console.log(arrayResult);


console.error(`STEP-2 Find out All the Even Numbers and log on console`);
const arrayEven = arrayNumbers.filter((element) => {
return element % 2 == 0;
});
console.log(arrayEven);


console.error(`STEP-3 Find out All the Odd Numbers and log on console`);
const arrayOdd = arrayNumbers.filter((element) => {
return element % 2 != 0;
});
console.log(arrayOdd);


console.error(`STEP-4 Find out All the Numbers which are Multiple of 5 and log on console`);
const arrayMutipleOf5 = arrayNumbers.filter((element) => {
return element % 5 == 0;
});
console.log(arrayMutipleOf5);


console.error(`STEP-5 Find out All the Numbers which are between 20 and 50 and log on console`);
const arrayRes = arrayNumbers.filter((element) => {
return (element > 20 && element < 50);
});
console.log(arrayRes);
