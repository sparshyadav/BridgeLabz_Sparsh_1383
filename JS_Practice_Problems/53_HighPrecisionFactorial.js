// Calculate 70! with high precision (all digits)
function fact(num, dp) {
    if (num == 1) {
        return 1;
    }

    if (dp[num != -1]) {
        return dp[num];
    }

    return dp[num] = BigInt(num) * BigInt(fact(num - 1, dp));
}

let dp = Array(71).fill(-1);

console.log(`The Factorial of 70 is: ${fact(70, dp)}`);