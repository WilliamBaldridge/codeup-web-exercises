"use strict";

//Lecture exercises
//1


// var i = 20;
//
// while (i < 51) {
//     console.log('while loop iteration #' + i);
//     i+=10;
// }

// do {
//     console.log('while loop iteration #' + i);
//     i+=10;
// } while (i < 51);

//2




//3




//Tesla speeding

// var tesla = 50
//
// do {
//     console.log("fasterrr...");
//     tesla+=30;
// } while (tesla <160)
//
// console.log(tesla)

// function speedUntilSeeCop(tesla) {
//     var isCop = false;
//     do {
//       var ohCrapCop = prompt("Is that a cop?")
//       isCop = ohCrapCop === "yes";
//     } while (ohCrapCop === true)
//         if(isCop === false) {
//             alert("Faster baby")
//         } else {
//             alert("Oh Crap, cop!")
//         }
// }

// var i = 0;
//
// do {
//     console.log(i);
//     i+=2;
// } while (i <= 20)


//
// function fizzlePop(buzz) {
//     var fizz = 0;
//         for (fizz = 0; fizz <= 100; fizz++) {
//             if (fizz % 15 === 0) {
//                 console.log("fizzbuzz");
//             } else if (fizz % 5 === 0) {
//                 console.log("buzz");
//             } else if (fizz % 3 === 0) {
//                 console.log("fizz");
//             }
//         }
// }





// EXERCISES
// #1

// function showMultiplicationTable(x) {
//     var i = 1;
//     for (i = 1 ; i < 100 ; i++){
//         console.log(x *= i)
//     }
// }

// function showMultiplicationTable(x) {
//     var i = 1;
//     for (i = 0 ; i < 10 ; i++) {
//         console.log(i + " x " + x + " = " + i * x);
//     }
// }



// #2

// correct
// for (let i = 0; i < 10; i++) {
//     let random = Math.floor((Math.random() * 200) + 20);
//     if (random % 2 === 0) {
//         console.log(random + ' is even');
//     } else {
//         console.log(random + ' is odd');
//     }
// }

//testing with var
// var random = Math.floor((Math.random() * 200) + 20);
//
// function randomBetween(x) {
//     for (i = 0; i < 10; i++) {
//         random;
//         if (random % 2 === 0) {
//             console.log(random + ' is even');
//         } else {
//             console.log(random + ' is odd');
//         }
//     }
// }


// #3
// var i = 1
// for (i = 1; i < 10; i++) {
//     let x = i;
//     let str = x - i;
//     console.log((Math.pow(x, str) + i + ""));
// }

// for (i = 0; i < 10; i++) {
//     let x = i;
//     let str = ( i + "") * i + "";
//     console.log(x + str)
// }


// for ( let i = 0; i < 10; i++) {
//     let x = i;
//     let xstr = x.toString();
//     let rep = xstr.repeat(x)
//     console.log(rep)
// }


// #4

var i = 0
for (i = 100 ; i > 0 ; i-= 5) {
    console.log(i)
}



