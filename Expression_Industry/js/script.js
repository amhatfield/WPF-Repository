// Amanda Hatfield, 9/9/2013 and Expression Industry

// Being the retail industry. I am going to figure out how much a game system would cost if I put it on layaway.

var price = prompt("What is the price of the game system");
var downPayment = prompt("What is the percent for the down payment")
var numberOfWeeks = prompt("What will be the number of payments you will make.");
// We will multiply the price of the item to the percent
var overallTotal = price * downPayment;
// Then we will take the overall total divide that to the number of weeks
var  howManyPayments = numberofWeeks / overallTotal;
console.log("This is how many payment I will have to make" + howManyPayments);
