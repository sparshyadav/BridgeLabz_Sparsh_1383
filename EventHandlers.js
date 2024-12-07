const EventEmitter = require("events");

// Creating an Instance of EventEmitter Class
const eventEmitter = new EventEmitter();

// Creating an Eventhandler Function
const greetHandler = (name) => {
    console.log(`Hello ${name}`);
};

// Registering the event handler for greet event
eventEmitter.on("greet", greetHandler);

// Emitting the greet event
eventEmitter.emit("greet", "Sparsh");