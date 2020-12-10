"use strict";

console.log("Hello from external JavaScript")

alert("Welcome to my Website!")

var response = prompt("What is your favorite color?")
//console.log("User's favorite color is :" + response)
var message = ("Great, " + response + " is my favorite color too!")
alert(message)

/*var dailyRentalCostDollars = 3

//var yesRentedMoviesKids = confirm("Have you rented movies for your kids?")
//if (yesRentedMoviesKids == true) {
  //  var littleMermaid = confirm("Did you rent The Little Mermaid?")
//}
//if (littleMermaid == true) {
  //  var mermaidRentalLength = prompt("How long did you rent The Little Mermaid?")
    //return console.log("User rented Little Mermaid for")
*/

var dailyRentalRateDollars = parseFloat(prompt("What is the daily cost to rent movies in dollars?"));
var littleMermaidDaysRented = parseFloat(prompt("How many days was The Little Mermaid rented for?"));
var brotherBearDaysRented = parseFloat(prompt("How many days was Brother Bear rented for?"));
var herculesDaysRented = parseFloat(prompt("How many days was Hercules rented for?"));
var totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
alert("Your total movie rental bill is: $" + totalRentalCost)

var googleHourlyRateDollars = parseFloat(prompt("What is the hourly pay rate in dollars for contract work at Google?"));
var amazonHourlyRateDollars = parseFloat(prompt("What is the hourly pay rate in dollars for contract work at Amazon?"));
var facebookHourlyRateDollars = parseFloat(prompt("What is the hourly pay rate in dollars for contract work at Facebook?"));
var googleHours = parseFloat(prompt("How many hours did you work this week for Google?"));
var amazonHours = parseFloat(prompt("How many hours did you work this week for Amazon?"));
var facebookHours = parseFloat(prompt("How many hours did you work this week for Facebook?"));
var totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;
alert("Your total pay this week is: $" + totalPayment)

var classIsNotFull = parseFloat(confirm("Are there seats available in class?")); // boolean
console.log(classIsNotFull);
var classScheduleDoesNotConflict = parseFloat(confirm("Does your schedule conflict with the class time?"));
console.log(classScheduleDoesNotConflict)// boolean
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;
console.log(studentEnrolled)


var numberOfItems; // number
var offerIsValid; // boolean
var isPremiumMember; // boolean
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

/* Password Validator
var username = 'codeup';
var password = 'notastrongpassword';
Create a variable that holds a boolean value for each of the following conditions:
the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace
*/

var username = 'codeup';
var password = 'notastrongpassword';
var minLength = 5;
var maxLength = 20;
var hasMinLength = password.length >= minLength;
var hasNoUserName = password.indexOf(username) < 0;
var hasMaxLength = password.length <= maxLength;
var isTrim;
var passValid = hasMinLength && hasNoUserName && hasMaxLength && isTrim;

