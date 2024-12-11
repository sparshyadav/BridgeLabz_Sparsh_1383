// Calculate the sum of numbers received in a comma delimited string
function stringSum(str) {
    let arr = str.split(",");

    let sum = arr.reduce((acc, num) => {
        return acc + Number(num);
    }, 0);

    return sum;
}

let str = "123,53,53,23,503";
let sum = stringSum(str);
console.log(`The Sum of Numbers in String is: ${sum}`);
