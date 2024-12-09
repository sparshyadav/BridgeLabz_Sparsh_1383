// // Creating an Object
// const car={
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     startEngine: function(){
//         console.log("The Engine is Running")
//     }
// };

// car.startEngine();


// // Creating a Class
// class Car{
//     constructor(brand, model, year){
//         this.brand=brand;
//         this.model=model;
//         this.year=year;
//     }

//     startEngine(){
//         console.log("The Engine is Running");
//     }
// }

// const myCar=new Car("Toyota", "Fortuner", 2023);
// myCar.startEngine();


// Inheritance
class Animal{
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log(this.name+' make a noise');
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed=breed;
    }

    bark(){
        console.log(this.name+' bark');
    }
}

const dog1=new Dog("Buddy", "Golder Retriever");
dog1.speak();
dog1.bark();


// Hierarchical Inheritance
class User{
    constructor(name){
        this.name=name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Admin extends User{
    constructor(name){
        super(name);
    }

    manageSystem(){
        console.log(`${this.name } is managing the system`);
    }
}

class Member extends User{
    constructor(name){
        super(name);
    }

    accessContent(){
        console.log(`${this.name} is accessing exclusing content`);
    }
}

const admin=new Admin('Alice');
admin.greet();
admin.manageSystem();

const member=new Member('Bob');
member.greet();
member.accessContent();