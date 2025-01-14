function add(a, b) {
    if (a < 0 || b < 0) {
        throw "Values Cannot be Lesser than 0";
    }
    else {
        return a + b;
    }
}

try {
    let ans = add(5, -9);
    console.log(ans);
}
catch (error) {
    console.log(error);
}