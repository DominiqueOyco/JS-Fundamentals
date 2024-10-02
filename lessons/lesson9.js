// import { CustomerDetails } from "../helpers/printHelper.js";

// var customerDetails = new CustomerDetails()
// customerDetails.printFirstName('Steve')
// customerDetails.printLastName('Smith')

//alternative way - move the constructor to the file where the class is located
import { customerDetails } from "../helpers/printHelper.js";

customerDetails.printFirstName('Steve')
customerDetails.printLastName('Smith')