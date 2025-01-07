// Example 1
// class Shape {
//     calculateArea() {
//         throw "Not Implemented";
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     calculateArea() {
//         return (Math.PI * this.radius * this.radius).toFixed(2);
//     }
// }

// class Rectangle extends Shape {
//     constructor(length, breadth) {
//         super();
//         this.length = length;
//         this.breadth = breadth;
//     }

//     calculateArea() {
//         return this.length * this.breadth;
//     }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(5, 4);
// console.log(`Area of Circle: ${circle.calculateArea()}`);
// console.log(`Area of Rectangle: ${rectangle.calculateArea()}`);



// Example 2
class Notification {
    send(message) {
        throw "Method Not Implemented";
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log(`Sending Email Message: ${message}`);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log(`Sending SMS Message: ${message}`);
    }
}

const email = new EmailNotification();
const sms = new SMSNotification();
email.send("This is an Email Notification");
sms.send("This is a SMS Notification");