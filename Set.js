// let st = new Set();

// st.add(1);
// st.add(1);
// st.add(2);
// st.add(2);
// st.add(3);
// st.add(4);
// console.log(st);
// console.log(st.size);

// st.delete(2);
// st.delete(4);
// console.log(st);

// console.log(st.has(1));
// console.log(st.has(2));

// console.log(st);
// st.clear();
// console.log(st);

let arr=[1, 1, 2, 3, 4, 2, 4, 3];
let newSt=new Set(arr);
console.log(newSt);


// Iterating over a Set
for(let val of newSt){
    console.log(val);
}

newSt.forEach((val)=>{
    console.log(`${val}`);
});

let newArr=[...newSt];
console.log(newArr);