// LinkedList Palindrome -> LinkedList Number Palindrome -> Palindromic Numbers Digit Sum -> Prime
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(val) {
//         const newNode = new Node(val);

//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let temp = this.head;
//             while (temp.next) {
//                 temp = temp.next;
//             }

//             temp.next = newNode;
//         }
//     }

//     print() {
//         let temp = this.head;
//         while (temp) {
//             console.log(temp.value);
//             temp = temp.next;
//         }
//     }

//     length() {
//         let size = 0;
//         let temp = this.head;

//         while (temp) {
//             size++;
//             temp = temp.next;
//         }

//         return size;
//     }

//     reverse(head) {
//         let curr = head;
//         let prev = null;

//         while (curr) {
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }

//         return prev;
//     }

//     palindromeList() {
//         let len = this.length();

//         let mid = Math.ceil(len / 2);

//         let midHead = this.head;
//         let count = 1;

//         while (count < mid) {
//             midHead = midHead.next;
//             count++;
//         }

//         let reversedHead = this.reverse(midHead);

//         let temp = this.head;
//         let checkHead = reversedHead;
//         let isPalindrome = true;

//         while (checkHead) {
//             if (temp.value !== checkHead.value) {
//                 isPalindrome = false;
//                 break;
//             }
//             temp = temp.next;
//             checkHead = checkHead.next;
//         }

//         this.reverse(reversedHead);

//         if (!isPalindrome) {
//             console.log("The LinkedList is non Palindromic");
//         } else {
//             console.log("The LinkedList is Palindromic");
//             this.checkNumberPalindrome();
//         }
//     }

//     paliNumber(num) {
//         let n = num;
//         let number = 0;

//         while (n !== 0) {
//             let rem = n % 10;
//             number = (number * 10) + rem;
//             n = Math.floor(n / 10);
//         }

//         return number === num;
//     }

//     digitSum(num) {
//         let sum = 0;
//         while (num !== 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }

//         return sum;
//     }

//     checkPrime(num) {
//         if (num < 2) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     checkNumberPalindrome() {
//         let temp = this.head;
//         let paliDigitSum = 0;

//         while (temp) {
//             let isPalindromeNumber = this.paliNumber(temp.value);
//             if (isPalindromeNumber) {
//                 console.log(`${temp.value} is Palindrome`);
//                 paliDigitSum += this.digitSum(temp.value);
//             } else {
//                 console.log(`${temp.value} is not Palindrome`);
//             }
//             temp = temp.next;
//         }

//         if (this.checkPrime(paliDigitSum)) {
//             console.log(`${paliDigitSum} is Prime`);
//         } else {
//             console.log(`${paliDigitSum} is not Prime`);
//         }
//     }
// }

// let ll = new LinkedList();
// ll.append(5);
// ll.append(101);
// ll.append(32);
// ll.append(101);
// ll.append(5);
// ll.palindromeList();



// Minimum Difference Numbers in an Array
// let arr = [87, 88, 743, 23, 86, 232, 87, 88];
// let sortedArr = arr.sort((a, b) => a - b);
// let mini = Number.MAX_VALUE;
// let ans = [];
// for (let i = 1; i < sortedArr.length - 1; i++) {
//     let diff = sortedArr[i] - sortedArr[i - 1];
//     if (diff < mini) {
//         ans[0] = sortedArr[i - 1];
//         ans[1] = sortedArr[i];
//         mini = diff;
//     }
// }

// console.log(ans);



// Sum of Factors of a Number
// function factors(num) {
//     let ans = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             console.log(`Factor of ${num} is: ${i}`);
//             ans.push(i);
//         }
//     }

//     let sum = ans.reduce((acc, num) => {
//         return acc + num;
//     }, 0);

//     return sum;
// }

// let arr = [12, 87, 88, 743, 23, 86, 232, 87, 88];
// let ans = [];
// for (let i = 0; i < arr.length; i++) {
//     ans.push(factors(arr[i]));
// }

// console.log(ans);



