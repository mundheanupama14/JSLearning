function display(args){
    console.log(args*args);
}
display(30);

var num = 100;
console.log(num); // 100 
var show = function(args){
    console.log(`Hi Good Mornig`);
}
show();
console.log(typeof show);

// Function Expression - FE
var sum = function(args1, args2){
console.log(args1 + args2);
}
sum(100,200);