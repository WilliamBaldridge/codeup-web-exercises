"use strict";

// TODO: create an array of numbers (of your choosing). Using map() multiply each number by
//  itself then add that number to the next, returning each value

{
    let defaultArr = [1, 2, 3, 4, 4, 4];

    let doubledARR = defaultArr.map(function (n) {
        return n * n;
    });
}

{
    let names = [
        'James Hetfield',
        'Dave Mustaine',
        'Corey Taylor',
        'Chino Moreno',
        'Jonathan Davis',
        'Maynard James Keenan'
    ];

    let firstNames = names.map(function (name) {
        return name.split(` `)[0];
    });

    let lastNames = names.map(function (name) {
        return name.split(` `)[1];
    });

    console.log(firstNames);

    let lastNameFirst = names.map(function (name) {
       let nameArr = name.split(` `);
       return (nameArr[nameArr.length - 1]) +  " " + nameArr[0];
    });

    let lastFirst = names.map(function (name){
        return name.split(' ').reverse()
    });

    console.log(lastFirst);
    $("#2").append("Different Names: " + lastFirst);

}

// {
//     let pets = [
//         {
//             name: 'Coda',
//             species: 'Dog',
//             breed: 'GSD',
//             age: "Never ask a lady..",
//             nickname: 'Horsie'
//         },
//         {
//             name: 'Murphy',
//             species: 'Dog',
//             breed: 'Great Pyrenees / Lab',
//             age: '9 mo',
//             nickname: 'Murf'
//         }
//     ];
//
//     let dogs = pets.map(function (dog) {
//        return {
//            name: dog.name,
//            breed: dog.breed,
//            nickname: dog.nickname,
//            isAGoodDog: true
//        };
//     });
//
//     console.log(dogs);
//
// }

// TODO: create an array of names of differing name counts and lengths
// TODO: map to a new array of names, where the names are reversed last-first
// TODO: with that new array, use jQuery to append each of the new array elements to the DOM
// TODO: feel free to incorporate styling
// TODO: it may be helpful to prepend the names rather than append


{

    // try .fill()????????/

    const givenName = [];
    const surName = [];
    const citizenship = [];

    let people = [
        {
            givenName,
            surName,
            citizenship,
        }
        // },
        // {
        //     givenName: "",
        //     surName: "",
        //     citizenship: "",
        // },
        // {
        //     givenName: "",
        //     surName: "",
        //     citizenship: "",
        // },
        // {
        //     givenName: "",
        //     surName: "",
        //     citizenship: "",
        // }
        ]

}


// {
//     let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//
//     let evens = numArr.filter(function (n) {
//         return n % 2 === 0;
//     });
//
//     console.log(evens)
//
//     let everyThirdNum = numArr.filter(function (index, n) {
//         return (index + 1) % 3 === 0;
//     });
//
//     console.log(everyThirdNum)
// }
//
// {
//     let stringArr = ['Tree', 'House', 'Car', 'Truck', 'Yard', 'Bush'];
//
//     stringArr = stringArr.filter(function (str) {
//        return str.length <= 4;
//     });
//
//     console.log(stringArr);
// }
//
// {
//     let pets = [
//         {
//             name: 'Coda',
//             species: 'Dog',
//             breed: 'GSD',
//             age: "Never ask a lady..",
//             nickname: 'Horsie'
//         },
//         {
//             name: 'Murphy',
//             species: 'Dog',
//             breed: 'Great Pyrenees / Lab',
//             age: '9 mo',
//             nickname: 'Murf'
//         },
//         {
//             name: 'Sir Walter',
//             species: 'Succulent',
//             breed: 'Many',
//             age: '7 Months',
//             nickname: 'Chew Toy'
//         }
//     ];
//
//     let dogs = pets.filter(function (pet) {
//        return pet.species.toLowerCase() === "dog";
//     });
//
//     console.log(dogs);
//
// }

{
    let numArr = [1, 2, 3, 5, 8, 13, 21];

    let sum = numArr.reduce(function (accumulator, currentValue) {
       return accumulator + currentValue;
    }, 10);

    console.log(sum);
}

{
    let stringArr = ["Billy", "Joe", "Sue"];

    let fullName = stringArr.reduce(function (accumulator, currentValue) {
        return accumulator + " " + currentValue;
    });

    console.log(fullName);
}




