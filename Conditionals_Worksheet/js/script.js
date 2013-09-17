// Amanda Hatfield, 9/15/2013 and Conditionals Worksheet

// Group #1: Last Chance of Gas!

var  gasMileage = 10
var  gauge = 25
var  gasCapacity = 100

// Don't need to get gas.
if(gasMileage > gauge / gasCapacity){
    console.log("Yes, you can make it without stopping for gas!")

}
// You need gas.
if(gasMileage / gasCapacity < gauge){
    console.log("You only have" + gasCapacity + "gallons in your tank, better stop and get gas now!")

}


// Group #2 Check the Login

var userName = "angelic_scars96";
var passWord = "aislynn6960";
var correctUser = "angelic_scars96";
var correctPass = "aislynn6960";

// login info is correct!

if(userName == correctUser){
    console.log("Welcome," + userName + "!")

}
  // User name not correct.
if(userName != correctUser){
    console.log("User not found, Try again.")

}
  // Password not correct.
if(passWord != correctPass){
    console.log("Password does not match our records.")

}

// Group #3: Movie ticket Price.

var movieTime = 6
var ageOfCustomer = 24

// Your ticket price is $12.00 or $7.00

if(movieTime < 3 && movieTime > 5){
    console.log("The ticket is $12.00")


}else{
    console.log("The ticket is $7.00")

}

if(ageOfCustomer > 10 && ageOfCustomer < 55){
    console.log("The ticket is $12.00")

}else{
    console.log("The ticket is $7.00")

}
