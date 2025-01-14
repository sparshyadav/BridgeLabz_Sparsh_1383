// Topic 3: Custom Errors and Extending Error
// Question: Create a custom error class for a validation error and use it in a function.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"
    }

    toString() {
        return `${this.name}: ${this.message}`;
    }
}

function checkInput(obj) {
    if (!obj.email) {
        throw new CustomError("Email Required but not Found");
    }

    if (!obj.password) {
        throw new CustomError("Password Required but not Found");
    }

    if (obj.password.length < 6) {
        throw new CustomError("Password Cannot be Less than 6 Charactetrs");
    }

    if (!obj.email.includes('@')) {
        throw new CustomError("Email Incorrect");
    }

    return console.log(`Everything is Fine, User Validated`);
}

try {
    checkInput({ email: "sparsh@gmail.com", password: '23953892' });
    checkInput({ email: "sparsh@gmail.com", password: '2395' });
    checkInput({ email: "sparsh#gmail.com", password: '543432395' });
}
catch (error) {
    console.log(error);
}