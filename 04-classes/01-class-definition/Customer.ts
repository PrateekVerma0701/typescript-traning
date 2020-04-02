class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, thelast: string) {
        this.firstName = theFirst;
        this.lastName = thelast;
    }
}

// create an istance
let myCustomer = new Customer("Prateek", "Verma")

console.log("First Name : " + myCustomer.firstName);
console.log("Last Name : " + myCustomer.lastName);