(function(){

    "use strict";

    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray = planetsString.split("|");
    //
    // /**
    //  * TODO:
    //  * Convert planetsString to an array, and save it in a variable named
    //  * planetsArray.
    //  * console.log planetsArray to check your work
    //  */
    //
    // console.log(planetsArray);
    //
    // /**
    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?
    //  *
    //  * BONUS:
    //  * Create another string that would display your planets in an unordered
    //  * list. You will need an opening AND closing <ul> tags around the entire
    //  * string, and <li> tags around each planet.
    //  */
    //
    // var breakingPlanets = planetsArray.join(" <br> ");
    //
    // console.log(breakingPlanets);
    //
    // var listedPlanets = " <ul> <li>" + planetsArray.join(" </li> " + " <li> ") + "</li> </ul>";
    //
    // console.log(listedPlanets);


    /*

    Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.

        Given:
        */

    // var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    // //
    // // function allIndexesOf(array, index) {
    // //     for (var i = 0; i < array.length; i++) {
    // //         if ()
    // //     }
    // // }
    //
    // function allIndexesOf(array, value) {
    //     var returnArray = [];
    //     array.forEach(function (element, index) {
    //         if (element == value) {
    //             returnArray.push(index);
    //         }
    //     });
    //     return returnArray;
    // }
    //
    // console.log(allIndexesOf(fruits, "apple")) //should return the array [0, 3]
    // console.log(allIndexesOf(fruits, "guava")) //should return the array []
    // console.log(allIndexesOf(fruits, "pineapple")) //should return [4]





    /*
    Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove

    Given:
    */
        //
        // var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
        //
        // function removeAll(array, value) {
        //     var returnArray = [];
    //             array.forEach(function (element) {
    //                 if (element !== value) {
    //                     returnArray.push(element);
    //                 }
    //             });
    //             return returnArray;
    //         }
    //
    //
    // console.log(removeAll(bugs, "ant")) // should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
    // console.log(removeAll(bugs, "mosquito")) // should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
    // console.log(removeAll(bugs, "roach")) // should return the original array b/c "roach" has no occurrances.

function randomInBetween(min, max) {
    // return (Math.random() * min) + (Math.random() * max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomInBetween(12, 48));

function coinFlip() {
    return Math.floor(Math.random() * 2);
}

console.log(coinFlip());

console.log(Math.floor(Math.random() * 10) + 1);

})();
