//Conditional statement
// if(condition){
//     execute some code here
// } else{
//     execute some code here
// }

//If hour between 6 and 12 print "Good Morning"
//If hour between 12 and 18 print "Good Afternoon"
//Otherwise: Good Evening

var hour = 5
// var hour = 6
// var hour = 17

if (hour >= 6 && hour < 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}

var ageIsMoreThanEighteen = true
//var isUSCitizen = true
//var ageIsMoreThanEighteen = false
var isUSCitizen = false
if (ageIsMoreThanEighteen && isUSCitizen) {
    console.log("This customer is eligible for DL")
} else {
    console.log("This Customer is NOT eligible for DL")
}

