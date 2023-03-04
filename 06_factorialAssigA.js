function factorialOfNum(num) {

    let factorial = 1;

    console.log(`The number is:${num}`);

    if (num == null || num == undefined || isNaN(num)) {

        console.log(`Please enter the valid input ${num} is Invalid`);
    }
    else {

        for (let index = num; index >= 1; index--) {

            factorial = factorial * index;
        } 
    }
    return factorial;
}

var result = factorialOfNum(5);
console.log(`Factorial of Number is: ${result}`);

var result = factorialOfNum(3);
console.log(`Factorial of Number is: ${result}`);

var result = factorialOfNum(null);
// console.log(`Factorial of Number is: ${result}`);

var result = factorialOfNum(8);
console.log(`Factorial of Number is: ${result}`);

var result = factorialOfNum(undefined);
//console.log(`Factorial of Number is: ${result}`);

var result = factorialOfNum(9);
console.log(`Factorial of Number is: ${result}`);

var result = factorialOfNum(0);
console.log(`Factorial of Number is: ${result}`);