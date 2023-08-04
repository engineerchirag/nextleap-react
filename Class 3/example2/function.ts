// Arrow function
const total = (a: number, b: number): number => {
    return a + b;
}

console.log(total(1,2));

// Named function 

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2));


// optional parameters

function concat(a: string, b: string, c?: string): string {
    return a + b + c;
}

console.log(concat('a', 'b'));
console.log(concat('a', 'b', 'c'));

function sum1(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

console.log(sum1(1, 2));
console.log(sum1(1, 2, 3));

// multiple paramters

function sum2(...args: number[]): number {
    let total = 0;
    args.forEach(item => {
        total += item;
    });
    return total;
}

console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4, 5, 6));

// 

function combine(a: string | number, b: string | number): string {
    return String(a) + String(b);
}

console.log(combine('1', '2')); // 12
console.log(combine('a', 'b')); // ab
console.log(combine(1, 2)); // 12




