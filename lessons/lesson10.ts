var customerFirstName: string = 'John'
var customerLastName: string = 'Smith'
var customerAge: number = 25

//customerFirstName = 100 TypeScript prevents new assignment of another data type of a variable after it is initialized
//JavaScript does not prevent user from assigning another data type

type Customer = { firstName: string, lastName: string, active: boolean }

//var firstCustomer: Customer = 100 the value that this variable can hold should match the type of the object
var firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Jones",
    active: true
}

//TypeScript helps with data integrity to ensure that wrong data will be assinged to the variables
//JavaScript does not have any protection with data integrity