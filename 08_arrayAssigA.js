console.log("************* Program of an Array **************");

const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log("***** STEP-1. Log the First and Last Element on Console *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

var lengthOfArray = arraySeasonalFruits.length
console.log(`Length of Given Array Is: ${lengthOfArray}`);

var valueAtIndex0 = arraySeasonalFruits[lengthOfArray-5];
console.log(`First element of an given Array is: ${valueAtIndex0}`);

//const valueAtIndex0 = arraySeasonalFruits[0];
//console.log(`First element of an given Array is: ${valueAtIndex0}`);

const valueAtIndex4 = arraySeasonalFruits[4];
console.log(`Last element of an given Array is: ${valueAtIndex4}`);


console.log("***** STEP-2. Add Element -> Papaya before the element 'Banana' and then Log Array on Console *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

arraySeasonalFruits.unshift("Papaya");
console.log(`Add Element -> Papaya at the First End of Array is: ${arraySeasonalFruits}`);
console.log(`Updated Array Is: ${arraySeasonalFruits}`);

console.log("***** STEP-3. Remove Element -> Remove 'Mango' from the Array and then Log Array on Console *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

const splicedArrayWithDeleteCount = arraySeasonalFruits.splice(4,1);
console.log(`Remove 'Mango' from the Array: ${arraySeasonalFruits}`);
console.log(`Updated Array Is: ${arraySeasonalFruits}`);

console.log("***** STEP-4. Add Element or Insert an Element 'Pineapple' at the Last Position Array and then Log Array on Console *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

arraySeasonalFruits.push("Pineapple");
console.log(`Add Element -> Pineapple at the Last Possition of Array is: ${arraySeasonalFruits}`);
console.log(`Updated Array Is: ${arraySeasonalFruits}`);

console.log("***** STEP-5. Insert an Element -> 'Dragon Fruit' Before 'Water Melon' in Array and then Log Array on Console *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(`Updated Array Is: ${arraySeasonalFruits}`);

console.log("***** STEP-6. Replace an Element -> 'Orange' With 'Kiwi' in Array and then Log Array on Console *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(`Updated Array Is: ${arraySeasonalFruits}`);


console.log("***** STEP-7. Log the Elements starting from index 1 to 4 and then Log Array on Console *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

const subArray = arraySeasonalFruits.slice(1,5);
console.log(`Updated Array Is: ${subArray}`);


console.log("***** STEP-8. Only select last 3 Element and then Log Array on Console: Use the length Property *****");

console.log(`Given Array Is: ${arraySeasonalFruits}`);

const subArray1 = arraySeasonalFruits.slice(4,7);
console.log(`Updated Array Is: ${subArray1}`);
