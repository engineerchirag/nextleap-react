function printData(condition, y) {
    if (condition) {
        let y: any = 20;
        return y;
    }
    return y;
}

console.log(printData(true, 10));
console.log(printData(false, 10));