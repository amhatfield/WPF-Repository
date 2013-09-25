// Amanda Hatfield 9/23/2013 Functions_Worksheet

// Circumference
  var circle = calcCirc(2)
function calcCirc(radius){
   var diameter = 6   // diameter is 6
   var pi = 3.14     // pi is 3.14
   var total = diameter * pi   // you will times diameter by pi
   return radius * total      // you will times radius by total to get the circumference


}
console.log("The Circumference of the circle is" +  circle)  // we are going to print the circumference to the console.



// Stung!

var beeStings = calcStings(50)
function calcStings(animalWeight){
     var stings = 8.666666667   // this the amount of bee stings it would take per pound
     var totalStings = animalWeight  * stings  // To get the total number of bee stings you will have to multiply
     return totalStings

}

console.log("It takes" +  beeStings  + "bee stings to kill a animal.")

