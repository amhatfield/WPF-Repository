// Amanda Hatfield, 9/9/2013 and Expression Personal


 // I am going to calculate how much I need to spend on classroom snacks for my daughter's class.

var  userInput = prompt("Number of students in the class");
var dollarsPerKid = prompt("How much do you want to spend pre kid");
var weeks= prompt("Number of weeks you provide snacks");
// now we will multiply the number of weeks by the dollar pre kid.
var total = weeks * dollarsPerKid;
// now we divide the total to how many kids are in the class.
var result = total / userInput
// now we print to the console
console.log("How much I have to spend is" + result "dollars")





