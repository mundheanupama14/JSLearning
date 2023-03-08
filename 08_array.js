console.log(`---------------Array Topioc-----------------`);

//Two Type of Array - 1.Homogeneous and 2.Heterogenous

var arrayOfNumber=[1,2,3,4,5,6,"Seven","Eight",5,6];
console.log(arrayOfNumber);
console.table(arrayOfNumber);

// in array we can store homo and hetero elememt togheter
//array can allowed to store duplicate element

const totalArrayElement=arrayOfNumber.length;
// console.log(arrayOfNumber.length);
console.log(`total number of array is: ${totalArrayElement}`);

const is8Available=arrayOfNumber.includes(8);  //to check element present or not
console.log(`is 8 available:${is8Available}`);

const is3Available=arrayOfNumber.includes(3);
console.log(`is 8 available:${is3Available}`);

const indexOf6 =arrayOfNumber.indexOf(6);
console.log(`index of 6 is:${indexOf6}`);

const indexOf10 =arrayOfNumber.indexOf(10);
console.log(`index of 10 is:${indexOf10}`);

var arrayOfNumber=[10,20,25,15,30,5];
const valueAtIndex2 =arrayOfNumber[2];
console.log(`value at index 2 : ${valueAtIndex2}`);

const updateValue=arrayOfNumber[3]=35;   //update  the value 
console.log(`updated value is : ${updateValue}`);            //in index of menthod we are not able to update value


const updatedValue =arrayOfNumber[1]=50;
console.log(`updated value is : ${updatedValue}`);  

var arrayOfNumber=[10,20,25,15,30,5];

console.log(`----adding number at last-------`);
arrayOfNumber.push(40);        //adding number at last
console.log(arrayOfNumber);

console.log(`----adding number at first-------`);
arrayOfNumber.unshift(0);  //adding number at first
console.log(arrayOfNumber);

console.log(`----removing last element by using pop menthod---------`);
arrayOfNumber.pop(40);
console.log(arrayOfNumber);

console.log(`----removing first element by using shift menthod-------`);
arrayOfNumber.shift(40);
console.log(arrayOfNumber);

var arrayOfNumber=[10,20,25,15,30,5,40,45]; //slice is used to remove portion 
console.log(`----element from index 3 using slice menthod(start index)-------`);
const arrayFromIndex3=arrayOfNumber.slice(3);
console.log(arrayFromIndex3);

console.log(`----element from index 3 using slice menthod(start index,end index)-------`);
const subArray=arrayOfNumber.slice(2,5);
console.log(subArray);

console.log("============================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];

console.log("==== splice(startIndex) === "); // to remove middle element
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
const splicedArrayRemoved = arrayOfNumbers.splice(1,1); //just remove one element
console.log(`Removed elements using deleteCount is: ${splicedArrayRemoved}` );

const splicedArrayIndexRemoved = arrayOfNumbers.splice(1); //just remove element from 1 index
console.log(`Removed elements using deleteCount is: ${splicedArrayIndexRemoved}` );

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
const splicedArrayRemove = arrayOfNumbers.splice(3); //just remove one element
console.log(`Removed elements using deleteCount is: ${splicedArrayRemove}` );


var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
const splicedArrayTwoRemove = arrayOfNumbers.splice(1,2); //to delete only one element(index 3,1 element)
console.log(`Delete elements 20,25 is: ${splicedArrayTwoRemove}` );

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
 const splicedArrayAddOne= arrayOfNumbers.splice(2,0,22); //just add  one element between other ...non replace
console.log(`Adding elements in middl…`);