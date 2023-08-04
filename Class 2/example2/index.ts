class DummyClass {

}

class ProductBasicDetail {
    title: string;
    description: string;
    constructor(title: string, description: string) {
        this.title = title;
        this.description = description
    }

    protected printBasicDetails() {
        if (!this.checkIfTitleIsEmpty()) {
            console.log('Title > ', this.title);
        }
        console.log(this.description);
    }

    private checkIfTitleIsEmpty(): boolean {
        return !this.title;
    }
}

class BeautyProduct extends ProductBasicDetail{
    pricePerGram: number;
    weight: number;
    constructor(pricePerGram: number, weight: number, title: string, description: string) {
        super(title, description);
        this.pricePerGram = pricePerGram;
        this.weight = weight;
    }

    totalPrice(handlingCharge: number): number {
        return (this.pricePerGram * this.weight) + handlingCharge;
    }

    printDetail(): void {
        // console.log(this.checkIfTitleIsEmpty()); // not valid
        console.log(this.printBasicDetails());
        console.log(this.pricePerGram, this.weight);
    }
}

const myBeautyProduct = new BeautyProduct(100, 10, 'Ponds', 'Beauty Product');
console.log(myBeautyProduct.totalPrice(20)); // 
console.log(myBeautyProduct.printDetail());
console.log(myBeautyProduct.title);
// console.log(myBeautyProduct.checkIfTitleIsEmpty()); // Not valid
// console.log(myBeautyProduct.printBasicDetails()); // not valid

console.log(myBeautyProduct instanceof BeautyProduct); // 
console.log(myBeautyProduct instanceof ProductBasicDetail);
console.log(myBeautyProduct instanceof Object); 
console.log(myBeautyProduct instanceof DummyClass); 