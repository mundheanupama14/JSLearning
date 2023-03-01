
// Print numbers from 1 to 10
// Innitialization 1
// Upadate Expression +1
// Condition <=10

console.log("********** Print The Numbers From 1 to 10 **********");
for (let index = 1; index <= 10; index = index+1) { // index = 1; condition 1<=10; update index = 3
    console.log(index); // 1 2 3
    
}

console.log("********** Print The Numbers From 0 to 5 **********");
for (let index = 0; index <= 5; index = index+1) { // Initialization 0; condition <=5; index+1
    console.log(index);
    
}

console.log("********** Print The Reverse Numbers 10 to 0 **********");
for (let index = 10; index >= 0; index = index-1) {
    console.log(index); // initial index=10; condition index>=0; update index = index-1
    
}

console.log("********** Print The Table Of 5 **********");
for (let index = 5; index <=50; index = index+5) { // initialization; condition; update
    console.log(index); // 5 10 15 ........... 50
    
}

console.log("********** Infinite Loop **********");
for (let index = 1; index <10;) { // index = 1
    console.log(index);
    
}

console.log("********** Postfix Operator **********");
for (let index = 10; index >= 0; index++) { // index = 12 // index ++ ==> index = index+1
    console.log(index); // 10 11 12
    
}
// index ++ ==> index = index+1
