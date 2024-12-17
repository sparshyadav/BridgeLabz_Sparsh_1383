class customArray extends Array {
    palindrome(str) {
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }

    solve(...args) {
        let ans = [];
        let numericSum = 0;
        let stringSum = "";
        let booleanSum = false;
        let primeSum = 0;

        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === "number") {
                numericSum += args[i];

                let prime = this.checkPrime(args[i]);
                if (prime) {
                    primeSum += args[i];
                }
            } else if (typeof args[i] === "string") {
                stringSum += args[i];
            } else if (typeof args[i] === "boolean") {
                booleanSum = booleanSum || args[i];
            } else if (Array.isArray(args[i])) {
                for (let item of args[i]) {
                    if (typeof item === "number") {
                        numericSum += item;
                    } else if (typeof item === "string") {
                        stringSum += item;
                    } else if (typeof item === "boolean") {
                        booleanSum = booleanSum || item;
                    }
                }
            }
        }

        ans.push(numericSum);
        ans.push(stringSum);
        ans.push(booleanSum);

        let checkPali = this.palindrome(stringSum);
        ans.push({ palindrome: checkPali });
        ans.push({ PrimeSum: primeSum });

        return ans;
    }

    checkPrime(num) {
        for (let i = 2; i < Math.sqrt(num / 2); i++) {
            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }
}

let arr = new customArray();
let ans = arr.solve(1, 2, 4, 'nit', 'tin', true, false, [5, false]);
console.log(ans);
