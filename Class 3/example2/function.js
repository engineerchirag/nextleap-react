// Arrow function
var total = function (a, b) {
    return a + b;
};
console.log(total(1, 2));
// Named function 
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// optional parameters
function concat(a, b, c) {
    return a + b;
}
console.log(concat('a', 'b'));
console.log(concat('a', 'b', 'c'));
function sum1(a, b, c) {
    return a + b;
}
console.log(sum1(1, 2)); // 
console.log(sum1(1, 2, 3));
