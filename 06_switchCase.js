// Multiple if or if-else conditions are not more readable. 
// So that, Insted of writting multiple if or if-else condition we can write Switch-Case

console.log(`************** Switch-Case Weekdays Program ***************`);

function weekDay(day) {

    switch (day) {

        case 1: // day==1    if(day==1) { }
            console.log(`Day of the week is ${day}: Monday`);
            break;
        case 2: // day==2    if(day==2) { }
            console.log(`Day of the week is ${day}: Tuesday`);
            break;

        case 3: // day==3    if(day==3) { }
            console.log(`Day of the week is ${day}: Wednsday`);
            break;

        case 4: // day==4    if(day==4) { }
            console.log(`Day of the week is ${day}: Thusday`);
            break;

        case 5: // day==5    if(day==5) { }
            console.log(`Day of the week is ${day}: Friday`);
            break;

        case 6: // day==6    if(day==6) { }
            console.log(`Day of the week is ${day}: saturday`);
            break;
        case 7: // day==7    if(day==7) { }
            console.log(`Day of the week is ${day}: Sunday`);
            break;

        default:
            console.log(`Invalid Day: ${day}`);
            break;
    }
}
weekDay(0);
weekDay(7);
weekDay(-2);
weekDay(1);
weekDay(9);
weekDay(2);
weekDay(100);
weekDay(3);
weekDay(undefined);
weekDay(4);
weekDay(null);
weekDay(5);
weekDay(6);





console.log(`************** Multiple If-Condition Weekdays Program **************`);

// 0 || >7 || <0 || null || undefined || NaN
// Monday=1, Tuesday=2,..... Sunday=7

function dayCheck(dayNumber) {
    if (dayNumber <= 0 || dayNumber > 7 || dayNumber == null || isNaN(dayNumber) || dayNumber == undefined) {

        console.log(`Invalid Day: ${dayNumber}`);
    }
    if (dayNumber == 1) {
        console.log(`Monday: ${dayNumber}`);
    }
    if (dayNumber == 2) {
        console.log(`Tuesday: ${dayNumber}`);
    }
    if (dayNumber == 3) {
        console.log(`Wednsday: ${dayNumber}`);
    }
    if (dayNumber == 4) {
        console.log(`Thusday: ${dayNumber}`);
    }
    if (dayNumber == 5) {
        console.log(`Friday: ${dayNumber}`);
    }
    if (dayNumber == 6) {
        console.log(`Saturday: ${dayNumber}`);
    }
    if (dayNumber == 7) {
        console.log(`Sunday: ${dayNumber}`);
    }
}
dayCheck(0);
dayCheck(1);
dayCheck(-5);
dayCheck(7);
dayCheck(14);
dayCheck(2);
dayCheck(null);
dayCheck(6);
dayCheck(4);
dayCheck(undefined);
dayCheck(3);
dayCheck(NaN);