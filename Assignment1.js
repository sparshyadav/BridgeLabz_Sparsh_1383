// Sequence Practice Problems

// // Q1. Random Function to get Single Digit
// let singleDigitRandomNumber = Math.floor(Math.random() * 10);
// console.log(`Single Digit Random Number is: ${singleDigitRandomNumber}`);

// // Q2. Random Dice Number
// let randomDiceNumber = Math.floor((Math.random() * 6) + 1);
// console.log(`Random Dice Number is: ${randomDiceNumber}`);

// // Q3. Adding Two Random Dice Numbers
// let num1 = Math.floor((Math.random() * 6) + 1);
// let num2 = Math.floor((Math.random() * 6) + 1);
// let sumRandomDiceNumbers = num1 + num2;
// console.log(`Sum of Random Dice Numbers ${num1} and ${num2} is: `, sumRandomDiceNumbers);

// //Q4. Sum and Average of 5 Random 2 Digit Values
// let randomNumbers = [];
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//     let random = Math.floor((Math.random() * 89 + 1) + 10);
//     randomNumbers.push(random);
//     sum += random;
// }

// let averageOfRandomNumbers = sum / 5;
// console.log(`The Sum of Random Numbers is: ${sum}`);
// console.log(`The Average of Random Numbers is: ${averageOfRandomNumbers}`);

// // Q5.Unit Conversion
// // a. 42 feet in feet
// let feet = 12;
// let inchesInFeet = 42 / 12;
// console.log(`42 Inches in Feet: ${inchesInFeet}`);

// // b. 60x40 Feet in Meteres
// let meter = 3.3;
// let feetInMeter1 = 60 / 3.3;
// let feetInMeter2 = 40 / 3.3;
// console.log(`${60} x ${40} feet in meter is: ${feetInMeter1.toFixed(2)} x ${feetInMeter2.toFixed(2)} meters`);

// // c. Area of 35 Plots
// let length=feetInMeter1.toFixed(2);
// let breadth=feetInMeter2.toFixed(2);
// let singlePlotArea=length*breadth;
// let area25Plot=singlePlotArea*25;
// console.log(`Area of 25 Plots of ${feetInMeter1.toFixed(2)} x ${feetInMeter2.toFixed(2)} meters is: ${area25Plot.toFixed(2)}`);



// Selection Practice Problems with if & else

// // Q1. Maximum of 5 Random Values
// let randomNumbers=[];
// let maximumNumber=Number.MIN_SAFE_INTEGER;
// for(let i=0; i<5; i++){
//     let random=Math.floor((Math.random()*899)+100);
//     randomNumbers.push(random);
//     maximumNumber=Math.max(random, maximumNumber);
// }

// console.log(`The Maximum of 5 Random Numbers is: ${maximumNumber}`);

// // Q2.  Check Date between 20th March and 20th June
// let date = process.argv[2];
// let month = process.argv[3];
// let ans = false;

// if (month == 4 || month == 5) {
//     ans = true;
// }
// else if (month == 3 && date >= 20) {
//     ans = true;
// }
// else if (month == 6 && date <= 20) {
//     ans = true;
// }

// console.log(ans);

// // Q3. Check Leap Year
// let year = process.argv[2];
// let isLeapYear = false;
// if (year % 4 == 0) {
//     if (year % 100 != 0 || year % 400 == 0) {
//         isLeapYear = true;
//     }
// }

// if (isLeapYear) {
//     console.log(`${year} is a Leap Year`);
// }
// else {
//     console.log(`${year} is not a Leap Year`);
// }

// // Q4. Head or Tails
// let random=Math.random();
// let tail=false;

// if(random<0.5){
//     tail=true;
// }

// if(tail){
//     console.log(`The coin show Tails`);
// }
// else{
//     console.log(`The coin shows Heads`);
// }



// Selection Practice Problems with if else if and else

// // Q1. Read a Digit in Number and Write in Word
// let input = parseInt(process.argv[2]);
// let words=["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// if(input<=9 && input>=0){
//     console.log(`The Number ${input} is read as`, words[input]);
// }
// else{
//     console.log(`The Number ${input} is not in Range`);
// }

// // Q2. Display Week Day
// let input = parseInt(process.argv[2]);
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

// if (input <= 6 && input >= 0) {
//     console.log(`The day ${input} is ${days[input]}`);
// }
// else {
//     console.log("The Day doesn't Exist");
// }

// // Q3. Unit Place
// let input = parseInt(process.argv[2]);
// if (input == 1) {
//     console.log("unit");
// }
// else if (input == 10) {
//     console.log("Ten");
// }
// else if (input == 100) {
//     console.log("Hundred");
// }
// else if (input == 1000) {
//     console.log("Thousand");
// }
// else if (input == 10000) {
//     console.log("Ten Thousand");
// }
// else if (input == 100000) {
//     console.log("Lakh");
// }
// else if (input == 1000000) {
//     console.log("Ten Lakh");
// }
// else {
//     console.log("Crores");
// }

// // Q4. Finding Minimum and Maximum from Operations
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let c = parseInt(process.argv[4]);

// let optionA = a + b * c;
// let optionB = a % b + c;
// let optionC = c + a / b;
// let optionD = a * b + c;

// console.log("The Minimum Operation Result is: ", Math.min(optionA, optionB, optionC, optionD));
// console.log("The Maximum Operation Result is: ", Math.max(optionA, optionB, optionC, optionD));



// Selection Practice Problems with case Statements

// // Q1. Read a Digit in Number and Write in Word
// let input = parseInt(process.argv[2]);
// switch (input) {
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     case 4:
//         console.log("Four");
//         break;
//     case 5:
//         console.log("Five");
//         break;
//     case 6:
//         console.log("Six");
//         break;
//     case 7:
//         console.log("Seven");
//         break;
//     case 8:
//         console.log("Eight");
//         break;
//     case 9:
//         console.log("Nine");
//         break;
//     case 0:
//         console.log("Zero");
//         break;
//     default:
//         console.log("Number not Found");
// }

// // Q2. Display Week Day
// let input = parseInt(process.argv[2]);
// switch (input) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Number not Found");
// }

// // Q3. Unit Place
// let unitInput = parseInt(process.argv[2]);
// switch (unitInput) {
//     case 1:
//         console.log("Unit");
//         break;
//     case 10:
//         console.log("Ten");
//         break;
//     case 100:
//         console.log("Hundred");
//         break;
//     case 1000:
//         console.log("Thousand");
//         break;
//     case 10000:
//         console.log("Ten Thousand");
//         break;
//     case 100000:
//         console.log("Lakh");
//         break;
//     case 1000000:
//         console.log("Ten Lakh");
//         break;
//     default:
//         console.log("Crores");
//         break;
// }

// // Q4 Unit Conversion
// let input=parseInt(process.argv[2]);
// let option=parseInt(process.argv[3]);

// switch(option){
//     case 1:
//         console.log(`${input} Feet in Inches is: ${input*12}`);
//         break;
//     case 2:
//         console.log(`${input} Feet in Meter is: ${input/3.3}`);
//         break;
//     case 3:
//         console.log(`${input} Inches in Feet is: ${input/12}`);
//         break;
//     case 4:
//         console.log(`${input} Meter to Feet is: ${input*3.3}`);
//         break;
//     default:
//         console.log("No Such Conversion Provided");
// }



// Repetition Practice Problems with for Loop

// // Q1. Power of 2
// let n = parseInt(process.argv[2]);
// for (let i = 0; i <= n; i++) {
//     let power = Math.pow(2, i);
//     console.log(`2 raised to the Power ${i} is: ${power}`);
// }

// // Q2. Harmonic Number
// let n=parseInt(process.argv[2]);
// let ans=0;

// for(let i=1; i<=n; i++){
//     ans+=(1/i);
// }

// console.log(`${n}th Harmonic Number is: ${ans.toFixed(2)}`);

// // Q3. Prime Number
// let n = parseInt(process.argv[2]);
// let isPrime = true;
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         isPrime = false;
//     }
// }

// if (isPrime) {
//     console.log(`${n} is a Prime Number`);
// }
// else {
//     console.log(`${n} is not a Prime Number`);
// }

// // Q4. Range Prime Numbers
// let x = parseInt(process.argv[2]);
// let y = parseInt(process.argv[3]);

// for (let i = x; i <= y; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//         }
//     }

//     if (isPrime) {
//         console.log(`${i} is a Prime Number`);
//     }
// }

// // Q5. Factorial
// let n = parseInt(process.argv[2]);
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }

// console.log(`Factorial of ${n} is ${fact}`);

// // Q6. Factors of a Number
// let n = parseInt(process.argv[2]);
// for (let i = 1; i * i <= n; i++) {
//     if (n % i == 0) {
//         console.log(`${i} is a factor of ${n}`);
//     }
// }



// Repetition Practice Problems with While Loop

// // Q1. Power of 2;c
// let n = parseInt(process.argv[2]);
// let i = 0;
// while (i <= n) {
//     let power = Math.pow(2, i);
//     if (power > 256) {
//         break;
//     }

//     console.log(`${i}th Power of 2 is: ${power}`);
//     i++;
// }

// // Q2. Magic Number
// let n = parseInt(process.argv[2]);
// let i = 0;
// let j = 100;

// if (n > 100 || n < 0) {
//     console.log("Number not in Range");
// }

// while (i <= j) {
//     let mid = Math.floor((j + i) / 2);

//     if (mid == n) {
//         console.log(`${mid} is your Number`);
//         break;
//     }
//     else if (mid > n) {
//         j = mid - 1;
//     }
//     else {
//         i = mid + 1;
//     }
// }

// // Q3. Extended Coin Toss
// let tails = 0;
// let heads = 0;

// while (tails < 11 || heads < 11) {
//     let coinFace = Math.random();

//     if (coinFace > 0.5) {
//         console.log("Tail")
//         tails++;
//     }
//     else {
//         console.log("Head")
//         heads++;
//     }
// }

// if (tails > heads) {
//     console.log(`Tail Wins`);
// }
// else {
//     console.log(`Head Wins`)
// }

// // Q4. Gambler
// let losingBets=0;
// let winningBets=0;
// let money=100;

// while(money>0 && money<200){
//     let bet=Math.random();
//     if(bet>0.5){
//         money++;
//         winningBets++;
//     }
//     else{
//         money--;
//         losingBets++;
//     }
// }

// if(money>0){
//     console.log(`Gambler made ${losingBets+winningBets} Bets and won ${winningBets} resulting to Rs. 200`);
// }
// else{
//     console.log(`Gambler made ${losingBets+winningBets} Bets and loose ${losingBets} resulting to Rs. 0`);
// }



// Functions Practice Problems

// // Q1. Temperature Conversion
// let temp = parseInt(process.argv[2]);
// let option = parseInt(process.argv[3]);

// function convertToFahrenhiet(temp) {
//     let newTemp = temp * 9 / 5 + 32;
//     return newTemp.toFixed(2);
// }

// function convertToCelcius(temp) {
//     let newTemp = (temp - 32) * 5 / 9;
//     return newTemp.toFixed(2);
// }

// switch (option) {
//     case 1:
//         if (temp > 0 && temp < 100) {
//             console.log(`${temp} Degree Celcius Converted to Degree Fahreinhiet is: ${convertToFahrenhiet(temp)}`);
//         }
//         else {
//             console.log("Not a Valid Temperature");
//         }

//         break;
//     case 2:
//         if (temp > 32 && temp < 212) {
//             console.log(`${temp} Degree Celcius Converted to Degree Fahreinhiet is: ${convertToCelcius(temp)}`);
//         }
//         else {
//             console.log("Not a Valid Temperature");
//         }
//         break;
// }

// // Q2. Check Palindrome
// function checkPalindrom(arr, brr) {
//     if (arr.length != brr.length) {
//         return false;
//     }

//     let i = 0;
//     let j = brr.length - 1;

//     while (j >= 0) {
//         if (arr[i] != brr[j]) {
//             return false;
//         }

//         j--;
//         i++;
//     }

//     return true;
// }

// function convertToArray(num, arr){
//     let digits = [];
//     while (num != 0) {
//         let rem = num % 10;
//         digits.push(rem);
//         num = Math.floor(num / 10);
//     }
//     while (digits.length > 0) {
//         arr.push(digits.pop());
//     }
// }

// let num1 = parseInt(process.argv[2]);
// let num2 = parseInt(process.argv[3]);

// let number1=[];
// let number2=[];

// convertToArray(num1, number1);
// convertToArray(num2, number2);

// let ans=checkPalindrom(number1, number2);
// console.log(ans);

// // Q3. Palindromic Prime
// let num = parseInt(process.argv[2]);

// function checkPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function reverseNumber(num) {
//     let temp = 0;
//     let m = num;

//     while (m != 0) {
//         let rem = m % 10;
//         temp = temp * 10 + rem;
//         m = Math.floor(m / 10);
//     }

//     return temp;
// }

// let reverse = reverseNumber(num);

// if (checkPrime(num)) {
//     if (checkPrime(reverse)) {
//         console.log(`${num} is Prime & Palindrome of ${num}: ${reverse} is also prime`);
//     }
//     else {
//         console.log(`${num} is Prime but Palindrome of ${num}: ${reverse} is not prime`);
//     }
// }
// else {
//     console.log(`Neither ${num} nor ${num}: ${reverse} are prime`);
// }