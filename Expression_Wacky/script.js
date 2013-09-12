// Amanda Hatfield, 9/11/2013 and Expression Wacky

// I am going to calculate how many hours it would take to watch eight seasons of Supernatural.
var seasons = prompt("Enter the current amount of seasons of Supernatural.");
var length = prompt ("Enter the length of the show");
var total = prompt("Enter the current total of episodes");
// we are going to divide the current number of seasons to length of the show.
var overallTotal = seasons / length;
// we are going to divide to overall total to the number of episodes.
var hours = overallTotal / total;
console.log("This is the number of " + hours + "hours that it would take me to watch all the season of Supernatural")

