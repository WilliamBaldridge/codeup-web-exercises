"use strict";

(function () {

//      objects lecture


// var beverageInventory = {
//         brandName: "glenlivet",
//         type: "scotch",
//         volumeInLiters: 0.75,
//         priceInCents: 4500,
//         expirationDate: 2120,
//         datesOfPreviousSips: [
//             new Date(2020, 7,18),
//             new Date(2020,7,20),
//             new Date(2020,7,22)
//         ],
//         isOpen : true
// };

// var beverageInventory = {};
//     beverageInventory.brandName = "glenlivet";
//     beverageInventory.type = "scotch";
//     beverageInventory.volumeInLiters = 0.75;
//     beverageInventory.priceInCents = 4500;
//     beverageInventory.expirationDate = 2120;
//     beverageInventory.datesOfPreviousSips = [
//         new Date(2020, 7,18),
//         new Date(2020,7,20),
//         new Date(2020,7,22)
//     ];
//     beverageInventory.isOpen = true;
//
//     console.log(beverageInventory);




// -- Mini Exercise 2

// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];
    /*
      1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
      2. Change the names of all users to "John Doe"
      3. Increase the current age of all users by 1

      Can you accomplish each step using iteration?
      */

// 1.
//
//     function logUserAge(users) {
//        return users.forEach(function()).age;
//     }

    // console.log(users.age.forEach(function()));

    // for (var i = 0; i < users.length; i += 1) {
    //     console.log(users.forEach(function (users) {
    //
    //     });
    // }


// for (var i = 0; i < users.length; i += 1) {
//     console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName);
// }



// 2. Change the names of all users to "John Doe"


// for (var i = 0; i < users.length; i += 1) {
//     users.forEach(function ().giveName) = forEach(function())
// }

    // users.forEach(function(users) {
    //     users.givenName = "John Doe";
    // });

    //     console.log(users);



// 3. Increase the current age of all users by 1

// users.forEach(function (users) {
//     users.age += 1;
// })

//     console.log(users);



    // Mini Exercise 3
    // Create a dog object...
    // The dog object should have properties for:
    // breed (string),
    //     weightInPounds (number),
    //     age (number),
    //     color (string),
    //     canBreed (boolean),
    //     shotRecords (array of objects with properties for date and typeOfShot)
    // The dog object should have methods to:
    //     bark() - will console.log “Woof!”
    // getOlder() - will increase age by 1
    // disableBreeding() - will set canBreed to false
    // vaccinate(nameOfVaccination) - takes in an argument for the name of the vaccination and adds a new shot with the current date to the shotRecords array


var myDog = {
    breed: "Belgian Malinois",
    weightInPounds: 63,
    age: 6,
    color: "Black and Brown",
    canBreed: true,
    shotRecords: [
        {
            typeOfShot: "rabies",
            date: "07/23/2020"
        },
        {
            typeOfShot: "worms",
            date: "07/23/2020"
        }
    ],
    speak : function bark() {
        console.log("Woof!")
    },
    birthday: function getOlder() {
        console.log(this.age);
        this.age += 1;
    },
    fixed: function disableBreeding() {
        console.log(this.canBreed);
        this.canBreed = false;
    },
    newVetShots: function vaccinate (nameOfVaccination) {
        console.log(this.shotRecords);
        this.shotRecords.push({
            typeOfShot: nameOfVaccination,
            date: new Date()
        });
    }
};

console.log(myDog.speak());

})();