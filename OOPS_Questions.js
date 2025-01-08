// // Beginner
// // 1. Car Class
// class Car{
//     constructor(brand, model){
//         this.brand=brand;
//         this.model=model;
//     }

//     start(){
//         console.log("Car Started");
//     }
// }

// let car=new Car("Hyundai", "i10");
// console.log(car.brand);
// console.log(car.model);
// car.start();


// // 2. Extend Car Class to create an ElectricCar Class
// class ElectricCar extends Car{
//     constructor(brand, name){
//         super(brand, name);
//     }

//     batteryLevel(){
//         const random=Math.floor(Math.random()*(100-0+1))+0;
//         return random;
//     }
// }

// let newCar=new ElectricCar("Hyundai", "Ioniq");
// console.log(newCar.brand);
// console.log(newCar.model);
// newCar.start();
// console.log(newCar.batteryLevel());



// Intermediate
// 1. Implement BankAccount Class
class BankAccount{
    #balance=0;

    deposit(value){
        this.#balance+=value;
    }

    withdraw(value){
        this.#balance-=value;
    }

    balance(){
        return this.#balance;
    }
}

let account=new BankAccount();
account.deposit(500);
console.log(account.balance());
account.withdraw(300);
console.log(account.balance());


// Create Class Shape
class Shape{
    area(){
        console.log("Calculating Area");
        
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }

    area(){
        super.area();
        let circleArea=3.14*(this.radius**2);
        return circleArea;
    }
}

class Rectangle extends Shape{
    constructor(length, breadth){
        super();
        this.breadth=breadth;
        this.length=length;
    }

    area(){
        super.area();
        let rectArea=this.length*this.breadth;
        return rectArea;
    }
}

// let s=new Shape();
// s.area();

let c=new Circle(4);
console.log(c.area());

let r=new Rectangle(4, 6);
console.log(r.area());