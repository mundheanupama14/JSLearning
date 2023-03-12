console.log("========== FREEZING ==========");
const player = {
    fullName : "Virat Kohli",
    totalCenturies : 46,
    isMarried : true
}
Object.freeze(player);  //freezes the object, no modification allowed
player.totalWicket = 120; //Adding new property not allowed
delete player.totalCenturies; //deleting existing property not allowed
player.fullName = "King Kohli"; //updating existing property not allowed

console.table(player);

console.log("========== OBJECT CONCAT USING ASIGN ==========");
const student = {
    firstName : "Elon",
    lastName : "Musk",
    age : 54,
}
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN : "QA2345"
}

// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address)