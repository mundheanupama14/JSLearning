// Function with No Arguments and No Return Value

function stringBasics() {
    console.log("My Dream Company Is: Infosys"); // STEP-1, My Dream Company Log on console
    var myHobby1 = "Reading Books"; // STEP-2, Creating 3 variables myHobby1, myHobby2, myHobby3
    var myHobby2 = "Travelling";
    var myHobby3 = "Cooking";

    // STEP-2.1, Log all Hobbies on console on Same Line 

    console.log("My Hobbies Are: ", "1.", myHobby1, "2.", myHobby2, "3.", myHobby3);

    // STEP-2.2, Sum The Total Number Of Characters That Is Available In myHobby1, myHobby2, myHobby3 

    //console.log("Total Number Of Characters Available Into This String Variable - myHobby1");
    var myHobby1Length = myHobby1.length;
    console.log("Total Characters OR Length Of String myHobby1 Is:", myHobby1Length);

    //console.log("Total Number Of Characters Available Into This String Variable - myHobby2");
    var myHobby2Length = myHobby2.length;
    console.log("Total Characters OR Length Of String myHobby2 Is:", myHobby2Length);

    //console.log("Total Number Of Characters Available Into This String Variable - myHobby3");
    var myHobby3Length = myHobby3.length;
    console.log("Total Characters OR Length Of String myHobby3 Is:", myHobby3Length);

    var sumOfAllHobbyLength = myHobby1.length + myHobby2.length + myHobby3.length;
    console.log("Sum Of The Total Number Of Characters That Is Available In myHobby1, myHobby2, myHobby3 : ", sumOfAllHobbyLength);
}
stringBasics(); // Function Call or Function Invoke
