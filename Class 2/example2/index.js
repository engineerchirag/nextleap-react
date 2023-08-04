var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DummyClass = /** @class */ (function () {
    function DummyClass() {
    }
    return DummyClass;
}());
var ProductBasicDetail = /** @class */ (function () {
    function ProductBasicDetail(title, description) {
        this.title = title;
        this.description = description;
    }
    ProductBasicDetail.prototype.printBasicDetails = function () {
        if (!this.checkIfTitleIsEmpty()) {
            console.log('Title > ', this.title);
        }
        console.log(this.description);
    };
    ProductBasicDetail.prototype.checkIfTitleIsEmpty = function () {
        return !this.title;
    };
    return ProductBasicDetail;
}());
var BeautyProduct = /** @class */ (function (_super) {
    __extends(BeautyProduct, _super);
    function BeautyProduct(pricePerGram, weight, title, description) {
        var _this = _super.call(this, title, description) || this;
        _this.pricePerGram = pricePerGram;
        _this.weight = weight;
        return _this;
    }
    BeautyProduct.prototype.totalPrice = function (handlingCharge) {
        return (this.pricePerGram * this.weight) + handlingCharge;
    };
    BeautyProduct.prototype.printDetail = function () {
        // console.log(this.checkIfTitleIsEmpty()); // not valid
        console.log(this.printBasicDetails());
        console.log(this.pricePerGram, this.weight);
    };
    return BeautyProduct;
}(ProductBasicDetail));
var myBeautyProduct = new BeautyProduct(100, 10, 'Ponds', 'Beauty Product');
console.log(myBeautyProduct.totalPrice(20)); // 
console.log(myBeautyProduct.printDetail());
console.log(myBeautyProduct.title);
// console.log(myBeautyProduct.checkIfTitleIsEmpty()); // Not valid
// console.log(myBeautyProduct.printBasicDetails()); // not valid
console.log(myBeautyProduct instanceof BeautyProduct); // 
console.log(myBeautyProduct instanceof ProductBasicDetail);
console.log(myBeautyProduct instanceof Object);
console.log(myBeautyProduct instanceof DummyClass);
