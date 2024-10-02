//Declarative function - can be called at the beginning of the file even if the function is declared later in the file
helloOne() //call the function

function helloOne() {
    console.log('Hello one!')
}

//Anonymous function - cannot be called until the function is defined
var helloTwo = function () {
    console.log('Hello two!')
}

helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}

helloThree()

//Function with arguments
function printName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}

printName('John', 'Smith')

//Function with return
function multiplyByTwo(number) {
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(20)
console.log(myResult)

//Importing functions 
import { printAge } from '../helpers/printHelper.js' //located in printHelper file in the helpers folder
printAge(5)

//Import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)