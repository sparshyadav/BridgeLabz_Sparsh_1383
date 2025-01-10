// 1. Car Class
class Car{
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
    }

    start(){
        console.log("Car Started");
    }
}

let car=new Car("Hyundai", "i10");
console.log(car.brand);
console.log(car.model);
car.start();