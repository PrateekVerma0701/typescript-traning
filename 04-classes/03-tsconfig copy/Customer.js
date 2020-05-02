"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, thelast) {
        this._firstName = theFirst;
        this._lastName = thelast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
// create an instance
var myCustomer = new Customer("Prateek", "Verma");
console.log("First Name : " + myCustomer.firstName);
console.log("Last Name : " + myCustomer.lastName);
