console.log("****** Write a Program To Print First 10 Number 'Fibonacci Series' ******");

let num1 = 0;
let num2 = 1;
let sum;
let i = 0;
for(i=0; i<10; i++) // i<10 - First 10 Number Fibonacci Series; if i=0
{
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(num2);
}

console.log("****** Write a Prime To Print First 10 'Prime Number' ******");

let count = 0;
for(let num = 2; count < 10; num++)
{
    let isPrime = true;
    for(let index = 2; index < num; index++){

        if(num % index == 0){

            isPrime = false;
            break;
        }
    }
    if(isPrime){

        console.log(num);
        count = count + 1;
    }
}