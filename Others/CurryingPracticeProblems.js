// Currying

// User Authentication
function add(user) {
    return function (a) {
        return function (b) {
            if (user.role === "Admin") {
                console.log(`The Result of ${a} + ${b} is: ${a + b}`);
            }
            else {
                console.log(`You're not Authorized to Perform this Operation`);
            }
        }
    }
}

let user1 = { name: "Sparsh", role: "Admin" };
let user2 = { name: "Raghav", role: "Software Developer" };

add(user1)(5)(7);
add(user2)(7)(6);
console.log();



// Status Check
function sendMessage(sender) {
    return function (receiver) {
        return function (message) {
            if (sender.status === "Online") {
                receiver.messages.push({ sentBy: sender.name, msg: message });
                console.log(`Message Successfully Sent to ${receiver.name} by ${sender.name}`);
            }
            else {
                console.log(`You're currently Offline, You Cannot send Messages`);
            }
        }
    }
}

let user3 = { name: "Sparsh", status: "Online", messages: [] }
let user4 = { name: "Rakshit", status: "Offline", messages: [] }

sendMessage(user3)(user4)("This is a Message");
sendMessage(user3)(user4)("This is a Sample Message");
sendMessage(user4)(user3)("This is a Another Message");

console.log(user3);
console.log(user4);
console.log()



// Event Wisher
function wishSender(occasion) {
    return function (sender) {
        return function (receiver) {
            return function (message) {
                console.log(
                    `
                    ${occasion} - ${receiver}
                    ${message}
                    by ${sender}
                    `
                )
            }
        }
    }
}

wishSender("Merry Christmas")("Sparsh")("Rakshit")("I Wish you a Merry Christmas hohoho");
wishSender("Happy New Year")("Sparsh")("Rakshit")("I Wish you a Happy New Year");