"use strict";

interface IPProduct {
    pricePerGram: number;
    weight: number;
    totalPrice: (charge: number) => number;
}

class PProduct implements IPProduct{
    pricePerGram;
    weight;
    constructor(pricePerGram: number, weight: number) {
        this.pricePerGram = pricePerGram;
        this.weight = weight;
    }

    totalPrice(handlingCharge) {
        return (this.pricePerGram * this.weight) + handlingCharge;
    }

    printDetail(): void {
        console.log(this.pricePerGram, this.weight);
    }
}

const myPProduct = new PProduct(100, 10,);
console.log(myPProduct.totalPrice(20)); 
console.log(myPProduct.printDetail());
console.log(myPProduct.pricePerGram);
console.log(myPProduct.weight);