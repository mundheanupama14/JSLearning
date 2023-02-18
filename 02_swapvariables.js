console.log("***** STEP-1 Swapping Two variables *****");

var sweety = "Sweety";
console.log("Value of Variable sweety is:" , sweety);

var cutie = "Cutie";
console.log("Value of Variable cutie is:" , cutie);

var temp = sweety;
sweety = cutie; 
cutie = temp;
console.log("Value of Variable sweety & cutie Respectively is:" , sweety, cutie); // Value of Two Variables After Swapping - Syntax Methode 1
console.log("Value of Variable sweety is:" , sweety , "Value of Variable cutie is:" , cutie); // Value Two Variables After Swapping  - Syntax Methode 2


console.log("***** STEP-2 Swapping Three variables *****");

var num1 = 100;
console.log("Value of Variable num1 is:" , num1);

var num2 = 200;
console.log("Value of Variable num2 is:" , num2);

var num3 = 300;
console.log("Value of Variable num3 is:" , num3);

var temp = num1;
num1 = num2; 
num2 = num3;
num3 = temp;
console.log("Value of Variables num1, num2 & num3 Respectively is:" , num1, num2, num3); // Value of Three Variables After Swapping - Syntax Methode 1
console.log("Value of Variable num1 is:" , num1 , "Value of Variable num2 is:" , num2 , "Value of Variable num3 is:" , num3); // Value of Three Variables After Swapping  - Syntax Methode 2
