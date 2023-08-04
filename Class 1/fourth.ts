function sum(i: number = 0, j: number = 0, k: number = 0): number {
    var result = i + j + k;
    return result;
}


// Client1
var total: number = sum(2, 1);
console.log(total);

// client 2
var total2 = sum(2, 2, 1);
console.log(total2);

// client 2
var total3 = sum(2);
console.log(total3);

// client 2
var total4 = sum();
console.log(total4);


