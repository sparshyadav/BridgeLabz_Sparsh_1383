// // Optional Chaining on Objects
// const user={
//     profile: {
//         address: {
//             city: "New York"
//         },
//         greet: () =>{
//             return "Hello";
//         }
//     }
// }

// // Optional Chaining on Properties
// const city=user?.profile?.address?.city;
// console.log(city);

// // Optional Chaining on Methods
// const greeting=user?.profile?.greet?.();
// console.log(greeting);


// // Optional Chaining on Arrays
// const users=[{name: "Alice"}, {name: "Bob"}];

// // Accessing an Element
// console.log(users?.[1]?.name);

// // Accessing Inaccessible Elements
// console.log(users?.[10]?.name); // undefined



// // Optional Chaining with Nullish Coalescing Operator
// const user=null;
// const username=user?.name ?? "Guest";
// console.log(username);



// Safe Function Calls
const callback={
    onClick: ()=>console.log("Clicked!")
}

callback?.onClick?.(); // Clicked
console.log(callback?.onHover?.()); // Undefined
