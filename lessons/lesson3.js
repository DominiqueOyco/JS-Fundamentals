//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith'
}
console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer['lastName'])

//change var inside the object
customer.firstName = "Mike" //dot notation
customer['lastName'] = "Silver" //bracket notation
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var cars = ["Volvo", "Toyota", "Tesla"]
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

//replace values inside the array
cars[1] = "BMW"
console.log(cars[1])

//access arrays that are inside of an object
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer.cars[0])
