// Role-Based Access Control System
const allowedRoles = ["Admin", "Manager", "Team Lead"];

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    canAccess() {
        if (allowedRoles.includes(this.role)) {
            return true;
        }

        return false;
    }
}

class Admin extends User {
    constructor(name) {
        super(name, "Admin");
    }
}

const user1 = new User("Sparsh", "Software Developer");
const user2 = new Admin("Rakshit");
const user3 = new User("Raghav", "Team Lead");

console.log(`Sparsh's Access: ${user1.canAccess()}`);
console.log(`Rakshit's Access: ${user2.canAccess()}`);
console.log(`Raghav's Access: ${user3.canAccess()}`);