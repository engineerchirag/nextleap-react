function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isEven(10));
// console.log(isEven(8));
// console.log(isEven(5));
// If, if/else , if / elseif / else
var condition1 = true;
if (condition1) {
    // execute this code only when condition1 is true
}
if (condition1) {
    // execute this code only when condition1 is true
}
else {
    // execute this code only when condition1 is false
}
function printNumber(n) {
    switch (n) {
        case 1: {
            console.log('1');
        }
        case 2: {
            console.log('2');
        }
        default: {
            console.log('default');
        }
    }
}
console.log(printNumber(1));
