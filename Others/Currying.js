// function sendEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`Sending Email to ${to}
// Subject: ${subject} 
// Body: ${body}`);
//         }
//     }
// }

// const step1 = sendEmail("sparsh@gmail.com");
// const step2 = step1("Regarding Curring");
// step2("This is a Sample Usage of Curring in Javascript");



// // ES6 Format - Using Arraw Functions
// const sendEmail = (to) => (subject) => (body) => console.log(`Sending Email to ${to}
// Subject: ${subject} 
// Body: ${body}`);

// const step1 = sendEmail("sparsh@gmail.com");
// const step2 = step1("Regarding Curring");
// step2("This is a Sample Usage of Curring in Javascript");



const applyDiscount = discount => price => price - (price * (discount / 100));

const apply20Discount = applyDiscount(20);
console.log(apply20Discount(100));
console.log(apply20Discount(500));


