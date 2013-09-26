// Amanda Hatfield 9/25/2013 Functions Personal

//  How much can I spend on each family member for Christmas?

var numberOfFamily = prompt("Enter how many family members you have to buy for.") // I am prompting the user to enter data.
var budget = prompt("Enter your budget for the christmas.") // I am prompting the user to enter their budget.
var total = budget / numberOfFamily // To get the price for each person you will divide
var overallTotal =  total + numberOfFamily // To get how much you will spend overall you will add.
console.log("You will spend" + total + "pre person and then you will spend" + overallTotal + "for Christmas.")