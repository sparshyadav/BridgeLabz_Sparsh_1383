class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.stack = (new Error()).stack;
    }
}

class InvalidInputError extends Error {
    constructor(message, field) {
        super(message);
        this.name = this.constructor.name;
        this.stack = (new Error()).stack;
        this.field = field;
    }
}

function validateForm(userInput) {
    if (!userInput.email) {
        throw new InvalidInputError("Email is Required", "Email");
    }

    if (!userInput.password) {
        throw new InvalidInputError("Passoword is Required", "Password");
    }
}

try {
    const userInput = { email: "" };
    validateForm(userInput);
}
catch (error) {
    console.log(error.field);
    console.log(error.message);
    console.log(error);
}
