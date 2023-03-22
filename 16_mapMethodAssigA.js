console.log(`************ Map Method Assignment A ************`);

const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];

console.log(`************* STEP-1 ***************`);
const arrayTransformed = [];
arrayNumber.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+10)
} );
console.log(`The Given array is :${arrayNumber}`);
console.log(`Array After adding 10 to each element: ${arrayTransformed}`);

console.log(`************** STEP-2 **************`);
const arraySquare = [];
arrayNumber.forEach( (currentValue) => {
    arraySquare.push(currentValue*currentValue)
} );
console.log(`The Given array is :${arrayNumber}`);
console.log(`The Square of each element in  Given array is :${arraySquare}`);

console.log(`************** STEP-3 **************`);
const arrayIndex = [];
arrayNumber.forEach( (currentValue,index) => {
    arrayIndex.push(currentValue+index)
} );
console.log(`The Given array is :${arrayNumber}`);
console.log(`Array After adding index value to each element: ${arrayIndex}`)