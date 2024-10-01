//Logical "AND"
console.log(true && true) //all values have to be TRUE for expression to be TRUE
console.log(true && false)

//Logical "OR"
console.log(true || false) //any value should be TRUE for any expression to be TRUE
console.log(false || false) //false since both values are false


var ageIsMoreThanEighteen = true
var isUSCitizen = true
var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

var ageIsMoreThanEighteen = false
var isUSCitizen = true
var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

var ageIsMoreThanEighteen = false
var isUSCitizen = false
var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

var ageIsMoreThanEighteen = true
var isUSCitizen = false
var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

//Logical "NOT"
console.log(!true) //opposite of value passed in
console.log(6 == 10)
console.log(6 !== 10)