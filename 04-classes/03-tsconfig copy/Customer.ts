class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, thelast: string) {
        this._firstName = theFirst;
        this._lastName = thelast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

// create an instance
let myCustomer = new Customer("Prateek", "Verma")

console.log("First Name : " + myCustomer.firstName);
console.log("Last Name : " + myCustomer.lastName);