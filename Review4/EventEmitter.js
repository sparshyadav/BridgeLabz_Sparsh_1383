// Create a simple event emitter class that allows registering event listeners and emitting events with data.
class EventEmitter {
    constructor() {
        this.flag = false;
    }

    on() {
        if (!this.flag) {
            this.flag = true;
            console.log("Turned On");
        }
        else {
            this.flag = false;
            console.log("Turned Off");
        }
    }

    off() {
        if (this.flag) {
            this.flag = false;
            console.log("Turned Off");
        }
        else {
            this.flag = true;
            console.log("Turned On");
        }
    }

    emit() {
        if (this.flag) {
            console.log("Current Status: On")
            this.off();
            console.log("Updated Status: Off")
        }
        else {
            console.log("Current Status: Off")
            this.on();
            console.log("Updated Status: On")
        }
    }
}

let emitController = new EventEmitter();
emitController.emit();
emitController.emit();
