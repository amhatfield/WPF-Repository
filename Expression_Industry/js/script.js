// Amanda Hatfield, 9/9/2013 and Expression Industry

// Being the retail industry. I am going to figure out how much a game system would cost if I put it on layaway.

var price = prompt("What is the price of the game system");
var downPayment = prompt("What is the percent for the down payment." +   "For example, 20% would be enter as 20.");
// We will multiply the price of the item to the percent
var overallTotal = price * downPayment;
var input = alert("The final price of the game system is"  + overallTotal );
var numberOfWeeks = prompt("Enter how many weeks the layaway is.")
// Then we will take the overall total divide that to the number of weeks
var  payment = overallTotal / numberOfWeeks;
console.log("My weekly payment is" + payment);
