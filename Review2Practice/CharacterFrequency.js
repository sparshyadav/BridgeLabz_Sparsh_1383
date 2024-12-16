// Count the occurrences of each character in a string.
function countFreq(str){
    let mp=new Map();
    
    for(let s of str){
        if(mp.has(s)){
            mp.set(s, mp.get(s)+1);
        }
        else{
            mp.set(s, 1);
        }
    }

    return mp;
}

let str="thisistocheckthefrequencyofeachcharacter";
let ans=countFreq(str);
console.log(ans);