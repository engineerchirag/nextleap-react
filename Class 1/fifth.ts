function isEven(n: number): boolean {
    if (n%2 === 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(isEven(10));
// console.log(isEven(8));
// console.log(isEven(5));


// If, if/else , if / elseif / else
const condition1 = true;
if (condition1) {
    // execute this code only when condition1 is true
}

if (condition1) {
    // execute this code only when condition1 is true
} else {
    // execute this code only when condition1 is false
}

function printNumber(n: number): string {
    switch(n) {
        case 1: {
            console.log('1');
            return '1';
        }
        case 2: {
            console.log('2');
            return '2';
        }
        default: {
            console.log('default');
            return '';
        }
    
    }
}

console.log(printNumber(1));

var arr = [1,2,3,4];
// for(init, condition, change) {}
// for( let x of arr)
// while
// map
// reduce
// forEach


var obj = {
    x: 1,
    y: 2,
    z: 3
}

// for(var key in obj)
// Object.keys(obj) > key[]
// Object.values(obj) > value[]

