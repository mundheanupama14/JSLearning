console.log("********** STEP-1 **********");

var contactNo = 9876543210;
var productID = 1122;
var PIN = 411043;

var custName = 'Abhijeet Patil';
var location = "Hydrabad City"
var emailID = "abhijeetpatil123@gmail.com"

var isOldCust = true;
var isPaidOnline = false; 
var feedbackSatisfied = true;

console.log("********** TypeOf Number Variables **********");

var typeofcontactNo = typeof contactNo; // typeof operator syntax 1
console.log("typeOf Variable Contact No: ",  typeofcontactNo); // typeof operator syntax 1
console.log("typeOf Variable Product ID:", typeof productID); // typeof operator syntax 2
console.log("typeOf Variable PIN:", typeof PIN); // typeof operator syntax 2

console.log("********** TypeOf String Variable **********");

console.log("typeOf Variable Customer Name:", typeof custName);
console.log("typeOf Variable Customer City:", typeof location);
console.log("typeOf Variable Customer EmailID:", typeof emailID);

console.log("********** TypeOf Boolean Variable **********");

console.log("typeOf Variable Is Old Customer:", typeof isOldCust);
console.log("typeOf Variable Is Paid Bill Online:", typeof isPaidOnline);
console.log("typeOf Variable Is Customer Feedback Satisfied:", typeof feedbackSatisfied);


console.log("********** STEP-2 **********");


var mobileNo = null; // Value of mobileNo Variable is Set/Assign As null
console.log("typeOf Variable Mobile Number:", typeof mobileNo);

var education; // Value of education Variable is not Set/ASsign
console.log("typeOf Variable Education is: ", typeof education);

console.log("....Difference Between Null Vs Undefined....");
console.log("Null in JavaScript means an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value. Undefined, on the other hand, means the variable has been declared, but its value has not been assigned.");

console.log("....Definations....");
console.log("Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.");
console.log("Undefined: It means the value does not exist in the compiler. It is the global object.");
