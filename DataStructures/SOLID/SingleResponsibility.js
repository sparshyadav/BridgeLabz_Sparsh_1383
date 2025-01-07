// Example 1
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     save() {
//         console.log(`${this.name} saved to the Database`);
//     }
// }

// class EmailService {
//     sendEmail(user, message) {
//         console.log(`Sending Email to ${user.email}: ${message}`);
//     }
// }

// const user = new User("Sparsh Yadav", "sparsh@gmail.com");
// const email = new EmailService();
// user.save();
// email.sendEmail(user, "Hello, this is a Sample Message");



// Example 2
class Document {
    constructor(content) {
        this.content = content;
    }

    save() {
        console.log("Saving Document to Database");
    }
}

class Printer {
    print(document) {
        console.log(`Printing Document: ${document.content}`);
    }
}

let doc = new Document("This is a Document");
doc.save();

let print = new Printer();
print.print(doc);