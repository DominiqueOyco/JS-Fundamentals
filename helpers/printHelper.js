export function printAge(age) {
    console.log(age)
}

// export class CustomerDetails {

//     printFirstName(firstName) {
//         console.log(firstName)
//     }

//     printLastName(lastName) {
//         console.log(lastName)
//     }

// }

//alternative way - create the constructor in this file rather than the main file
class CustomerDetails {
    /**
     * This method will print the first name
     * @param {string} firstName 
     */
    printFirstName(firstName) {
        console.log(firstName)
    }

    /**
     * This method will print the last name
     * @param {string} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails()