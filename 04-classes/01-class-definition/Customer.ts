class Customer {

    firstName: string;
    lastName: string;
}

let myCustomer = new Customer()

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";

console.log("First Name : " + myCustomer.firstName);
console.log("Last Name : " + myCustomer.lastName);