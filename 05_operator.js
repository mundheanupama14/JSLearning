console.log(`====Arithmetic Operator====`);
 var num1 = 10;
 var num2 = 2;
 var result = num1 + num2; // Addition of two operants or number
 console.log(`Addition Is: ${result}`);

 result = num1 - num2; // Substraction
 console.log(`Substraction Is: ${result}`);

 result = num1 * num2; // Multiplication
 console.log(`Multiplication Is: ${result}`);

 result = num1 ** num2; // Exponential - Suare of 10, 10^2= 10*10; Cube of 10, num1=10,num2=3 = 10*10*10
 console.log(`Exponential Is: ${result}`);

 result = num1 / num2; // Division
 console.log(`Division Is: ${result}`);

 result = num1 / 3; // Division
 console.log(`Division Is: ${result}`);

 result = num1 % 3; // Modulus
 console.log(`Reminder Is: ${result}`);

 var num = 10; // Compound Addition +=
 num+=20; // num = num + 20
 console.log(`Compaound Addition Is: ${num}`);

 var num = 20; // Compound Substraction -=
 num-=10; // num = num - 10
 console.log(`Compaound Substraction Is: ${num}`);

 var num = 8; // Compound Multiplication *=
 num*=2; // num = num * 2
 console.log(`Compaound Multiplication Is: ${num}`);

 var num = 10; // Compound Divisition /=
 num/=2; // num = num / 2
 console.log(`Compaound Division Is: ${num}`);

 var num = 10; // Compound Divisition /=
 num/=3; // num = num / 3
 console.log(`Compaound Division Is: ${num}`);

 var num = 10; // Modulus
 num%=3; // num = num % 3 

 console.log(`Compaound Reminder Is: ${num}`);


 console.log(`Caparison operators `);
 var num3 = "10";
 var num4 = 10;
 console.log(num3==num4); // 10==10
 console.log(num3===num4);


 var marks = 35;
 console.log( marks >= 35); // Greater than equal to >=
 // Is marks Greater than 35
 // Is marks Greater than Equal to 35


 var marks = 35;
 console.log( marks <= 35); // Less than equal to <=
 // Is marks Less than 35
 // Is marks Less than Equal to 


 var marks = 70;
 var result = marks >= 60 ? "Allow Him for Interview" : "Don't Allow";
 console.log(result);

 var age = 20;
 var res = age >= 21 ? true : false;
 console.log(res);


 console.log("Even or Odd");
 var myNumber = 7;
 // Even - Divide by 2 and reminder is 0
console.log(myNumber %2== 0);
var result = myNumber %2== 0 ? "Even" : "Odd";
console.log(result);

var num1 = 10;
var num2 = 12;
var result = num1 > num2 ? num1 : num2;
console.log(result);


// Function with One 1 Argument and Return Value

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength %2== 0 ? "Even" : "Odd";
    return result;
}
var result = wordLength("JavaScript");
console.log(`word "JavaSript" has ${result} length`);

// var result = wordLength("Google Chrome");
// console.log(`word "Google Chrome" has ${result} length`);

console.log(`word "Google Chrome" has ${wordLength("Google Chrome")} length`); // Written in Single Line code without using var result variable to strore result


function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are Eligible for Marriage` : "Not Eligible Try next time";
    return result; 

}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);

