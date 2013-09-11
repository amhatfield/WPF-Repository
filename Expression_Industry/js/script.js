// Amanda Hatfield, 9/9/2013 and Expression Industry

// Being the retail industry. I am going to figure out how much a game system would cost if I put it on layaway.

var price = prompt("What is the price of the game system");
var downPayment = prompt("What is the percent for the down payment." + /n  "For example, 2% would be enter as 20.");
var overallTotal = price * downPayment;
var input = alert("The final price of the game system is"  + overallTotal );
var amountOfPayment = prompt("How much will to be for the payment");
// We will multiply the price of the item to the percent
// Then we will take the overall total divide that to the number of weeks
var  howManyWeeks = amountOfPayment / overallTotal;
console.log("This is how many weeks I have to make a payment" + howManyWeeks);
