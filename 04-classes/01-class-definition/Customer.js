var Customer = /** @class */ (function () {
    function Customer(theFirst, thelast) {
        this.firstName = theFirst;
        this.lastName = thelast;
    }
    return Customer;
}());
// create an istance
var myCustomer = new Customer("Prateek", "Verma");
console.log("First Name : " + myCustomer.firstName);
console.log("Last Name : " + myCustomer.lastName);
