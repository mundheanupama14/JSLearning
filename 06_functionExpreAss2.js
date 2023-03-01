 var checkLeapYear = function(leapYear) {
    
    if (leapYear == null || (typeof (leapYear) != "number") || leapYear == undefined || isNaN(leapYear)) {
        
        console.log(`Please enter the valid input: ${leapYear} is Invalid`);
    }

    else if((0==leapYear % 4) && (0!=leapYear % 100) || (0==leapYear % 400)){

        console.log(`${leapYear} is a Leap Year`);
    }
    else{

        console.log(`${leapYear} is NOT a Leap Year`);
    }
}

checkLeapYear(2023);
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);