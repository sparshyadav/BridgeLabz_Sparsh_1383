// Constructor Function, new Keyword, Optional Chaining, Deep Copying

// Managing Bank Accounts with Optional Chaining
function BankAccount(name, accountNumber, phoneNumber, contactInfo) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.phoneNumber = phoneNumber;
    this.contactInfo = contactInfo;
}

const acc1 = new BankAccount("Sparsh", 123, 37285329, {
    address: {
        country: "India",
        state: {
            stateName: "Uttar Pradesh",
            city: {
                cityName: "Meerut"
            }
        }
    }
});

console.log(acc1?.name);
console.log(acc1?.contactInfo?.address?.state?.stateName);
console.log(acc1?.contactInfo?.address?.state?.stateName?.flatNumber);
console.log();



// Deep Copying and Accessing Properties Using Optional Chaining
let theme = {
    color: "light",
    font: "Montserat",
    layout: {
        navbar: {
            width: "200px",
            position: "left"
        }
    }
}

function deepCopy(obj) {
    let newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
}

let copyTheme = deepCopy(theme);
copyTheme.layout.navbar.width = "500px";

console.log(copyTheme?.layout?.navbar?.height);
console.log(copyTheme?.layout?.navbar?.width);
console.log(theme?.layout?.navbar?.width);
console.log();

