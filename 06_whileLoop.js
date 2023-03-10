// WAP to print numbers from 0 to 10

var index = 0; //Initialization
 while (index <= 10) {  //Condition
    console.log(index);
    index ++;  //Update Expression
} 

console.log(" EVEN numbers");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ]; 

var index = 0; //Initialization
let sum = 0;
 while (index<arrayOfNumbers.length) {  //Condition
    const element = arrayOfNumbers[index];
    if(element%2==0){
        console.log(element);
        sum = sum + element;
    }
       index ++;  //Update Expression
       
}