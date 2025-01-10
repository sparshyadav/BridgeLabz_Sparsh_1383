// 2. Extend Car Class to create an ElectricCar Class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log("Car Started");
    }
}

class ElectricCar extends Car {
    constructor(brand, name) {
        super(brand, name);
    }

    batteryLevel() {
        const random = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        return random;
    }
}

let newCar = new ElectricCar("Hyundai", "Ioniq");
console.log(newCar.brand);
console.log(newCar.model);
newCar.start();
console.log(newCar.batteryLevel());