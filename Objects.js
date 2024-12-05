// // Creating Objects
// // Method 1
// const person={
//     name: "Sparsh",
//     age: 22,
//     greet: function(){
//         console.log(`Hello from ${this.name}`);
//     }
// }

// console.log(person.named);
// console.log(person.age);
// person.greet();


// // Method 2 - Using new Object()
// const book=new Object();
// book.title="1984";
// book.author="George Orwell";


// // Method 3 - Using Constructor Function
// function Person(name, age){
//     this.name=name;
//     this.age=age;
// }

// const person1=new Person("Sparsh", 22);
// console.log(person1.name);
// console.log(person1.age);


// // Method 4 - Classes
// class Animal{
//     constructor(name, species){
//         this.name=name;
//         this.species=species;
//     }

//     speak(){
//         console.log(`${this.name} makes a noise`);
//     }
// }

// const dog=new Animal("Rex", "Dog");
// dog.speak();


const person = {
    name: "Sparsh",
    age: 22,
    town: "Meerut",
    greet: function () {
        console.log(`${this.name} says Hi!`)
    }
}

// // Updating, deleting Object Properties and Accessing them 
// console.log(person.name); // Dot Notation
// person.name = "Rakshit";
// console.log(person["name"]); // Bracket Notation
// console.log(person.town);
// delete person.town;
// console.log(person["town"]);

//Itertating Over Properties
// For in Loop
for (let key in person) {
    console.log(`${key} -> ${person[key]}`);
}


