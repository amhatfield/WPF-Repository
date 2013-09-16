// Amanda Hatfield, 9/15/2013 and Conditionals Worksheet

// Group #1: Last Chance of Gas!

var  gasMileage = 30
var  gauge = 15
var  gasCapacity = 100

// Don't need to get gas.
if(gasMileage > gauge / gasCapacity){
    console.log("Yes, you can make it without stopping for gas!")

}
// You need gas.
if(gasMileage < gauge / gasCapacity){
    console.log("You only have" + gasCapacity + "gallons in your tank, better stop and get gas now!")

}


