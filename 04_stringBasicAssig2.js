// Function with No Arguments and No Return Value

var myString = "   Hey you are doing good, keep it up   ";

function stringHandsOn() {
    //console.log("   Hey you are doing good, keep it up   ");
    console.log("1. Print, My String As It Is:", myString); // STEP-1, Print the string as it is on console

    var myStringLength = myString.length; // STEP-2, calculate the length of string
    console.log("2. Total Characters OR Length Of String myString Is:", myStringLength);

    var myStringAfterTrim = myString.trim(); // STEP-3 //    Hey you are doing good, keep it up    
    console.log("3. Removing Leading/Start and Trailling/End Extra spaces using trim():", myStringAfterTrim, myString.length, myStringAfterTrim.length);
    console.log("3.1. Before Removing Leading and Trailling Extra spaces:", myString.length);
    console.log("3.2. After Removing Leading and Trailling Extra spaces using trim():", myStringAfterTrim.length);

    //STEP-4, Print the Total Number Extra spaces Count that is Removed from the string in Step-3, - myString

    var count = myString.length - myStringAfterTrim.length;
    console.log("4. Print the Total Number of Extra spaces Removed in Step-3, Count Is:", count);

    console.log("5. Print the First and Last character on the Same Line after trim():");
    //var myStringAfterTrim = "Hey you are doing good, keep it up";
    console.log("5.1. First character of string after triming:", myStringAfterTrim.charAt(0), "5.2. Last character of string after triming:", myStringAfterTrim.charAt(33));

    console.log("6. Print the count of Total words available in the string after Step-3 Is:");
    console.log("split() method");
    var splitResult = myStringAfterTrim.split(" ");
    console.log(splitResult);
    console.log("Total words: ", splitResult.length);

    console.log("7. Print the index of Word 'good' from the given string");

    var indexOfgood = myString.indexOf('good');
    console.log("Index of character good is:", indexOfgood);

    console.log("8. Print the substring starting from index 22, using substring() and slice():");

    console.log("slice() methode");
    var sliceResult = myStringAfterTrim.slice(22);
    console.log("Substring starting from index 22 is:", sliceResult);
    myStringAfterTrim.slice(22);

    var endsWithup = myStringAfterTrim.endsWith('up');
    var startsWithHey = myStringAfterTrim.startsWith('Hey');
    console.log("9. Check, is string ends with word 'up' after Step-3:", endsWithup);
    console.log("10. Check, is string starts with word 'Hey' after triming i.e after Step-3:", startsWithHey);

}
stringHandsOn(); // Function Invoke OR Function Call