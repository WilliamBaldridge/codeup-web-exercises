"use strict";

(function () {



// var random = Math.floor((Math.random()*50)+1);
//
// console.log("Random odd number to skip is: " + random);


var userNumber = parseFloat(prompt("Pick an odd number between 1 and 50:"));
for (var i = 0 ; i < 50 ; i++) {
    if (userNumber % 2 === 0) {
        continue;
    } else
}


for (var i = 0 ; i < 50 ; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (userNumber === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
    if (i === 50) {
        break;
    }
}





})();