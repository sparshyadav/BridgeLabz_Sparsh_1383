// Calculate Fibonacci(500) with high precision (all digits)
function fibo(num, dp) {
    if (num == 0 || num == 1) {
        return BigInt(num);
    }

    if (dp[num] != -1) {
        return dp[num];
    }

    return dp[num] = fibo(num - 1, dp) + fibo(num - 2, dp);
}

let dp = Array(501).fill(-1);

console.log(`The 500th Fibonacci Number is: ${fibo(500, dp)}`);