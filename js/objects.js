(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    //
    // var person = {
    //     firstName: "William",
    //     lastName: "Baldridge"
    // };
    //
    // console.log(person.firstName)
    // console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

   //
   //  person.sayHello = function sayHello() {
   //      return person.firstName + " " + person.lastName + ", greetings.";
   //  }
   //
   // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];


    // shoppers.forEach(function(shopper) {
    //     var discountSpendQual = 200
    //     var qualifyingPay = discountSpendQual - shopper.amount
    //     if (shopper.amount > 200) {
    //          console.log(shopper.name + ", congrats on your discount");
    //     } else {
    //         console.log(shopper.name + ", you need to spend an additional $" + qualifyingPay + " to earn a discount!");
    //     }
    // });

    // function calculateDiscountSavings(amount, qualifyingPurchaseAmount, discountRate) {
    //     // if (amount > qualifyingPurchaseAmount) {
    //     //     return amount * discountRate;
    //     // } else {
    //     //     return 0;
    //     // }
    //     return (amount > qualifyingPurchaseAmount ? amount * discountRate : 0);
    // }
    //
    // var qualifyingPurchaseAmount = 200;
    // var discountRate = .12
    //
    // shoppers.forEach(function(shopper) {
    //     var name = shopper.name;
    //     var originalSpend = shopper.amount;
    //     var discountSavings = calculateDiscountSavings(originalSpend, qualifyingPurchaseAmount, discountRate);
    //     var afterDiscountCost = originalSpend - discountSavings;
    //     var message = name +
    //         " made a purchase of " + originalSpend +
    //         " and will save " + discountSavings +
    //         " off the purchase for a total cost of " + afterDiscountCost;
    //     console.log(message);
    // });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "A Darkness Forged in Fire: Book One of the Iron Elves",
            author:  {
                firstName: "Chris",
                lastName: "Evans"}
                },
        {
            title: "The Prophet",
            author: {
                firstName: "Khalil",
                lastName: "Gibran"}
                },
        {
            title: "Romance of the Three Kingdoms",
            author:  {
                firstName: "Luo",
                lastName: "Guanzhong"}
                },
        {
            title: "Harry Potter and the Half-Blood Prince",
            author:  {
                firstName: "J.K.",
                lastName: "Rowling"}
                },
        {
            title: "The Black Swan: The Impact of the Highly Improbable",
            author:  {
                firstName: "Nassim",
                lastName: "Nicholas Taleb"}
                },
    ];


    books.forEach(function(book, index) {
        var bookNumber = index + 1;
        console.log("Book # "  + bookNumber);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    });


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

// function createBook (newBook, authorFirst, authorLast) {
//     return books.push({
//             title: newBook,
//             author: {
//                     firstName: authorFirst,
//                     lastName: authorLast
//                 }
//         });
// }
//

    function createBook (newBook, author) {
        var nameArr = author.split(" ");
        var firstName = nameArr[0];
        var lastName = nameArr[1];
        return {
            title: newBook,
            author: {
                    firstName: firstName,
                    lastName: lastName
                }
        };
}

//
console.log(createBook("working? yes,","no?", "maybe so?"));
    console.log(books);
//
//     books.forEach(function(book, index) {
//         var bookNumber = index + 1;
//         console.log("Book # "  + index);
//         console.log("Title: " + book.title);
//         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
// });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// books.forEach(function (id, title))

})();

