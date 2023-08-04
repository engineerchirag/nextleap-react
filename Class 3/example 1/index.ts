interface IImage {
    url: string,
    width: number,
    height: number,
    alt: string
}

interface IDiscount {
    type: string,
    data: number
}

interface IPrice {
    mrp: number,
    finalPrice: number,
    discount: IDiscount
}

interface IProduct {
    title: string,
    image: IImage,
    ratings: any,
    featuresList: string[],
    freeDelivery: boolean,
    price: IPrice,
    exchangeOfferDiscount: any,
    bankOffersLink: any,
    productPageLink: any
}

interface IProductResponse {
    productCard: IProduct[],
    footer: any
}

interface IProductCompare {
    title: string,
    img: string
};

"use strict";
var cart: string[] = [];
let compareProductList: IProductCompare[] = [];
let compareWrapperTimeoutId: number;
fetch('https://sandbox.nextleap.app/products/fetch')
    .then(function (response) { return response.json(); })
    .then(function (data: IProductResponse) {
    removeLoader();
    renderHeader();
    renderProductList(data.productCard);
    renderToastDiv();
    renderCompareDiv();
    renderFooter(data.footer);
})
    .catch(function (error) {
    console.error(error);
});
document.body.appendChild(renderBody());
function renderBody() {
    var parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", "parent-div");
    parentDiv.classList.add("parent-div");
    parentDiv.appendChild(renderLoader());
    return parentDiv;
}
function addToBody(element) {
    var parentDiv = document.getElementById("parent-div");
    if (parentDiv) {
        parentDiv.appendChild(element);
    }
}
function removeFromBody(element) {
    var parentDiv = document.getElementById("parent-div");
    if (parentDiv) {
        parentDiv.removeChild(element);
    }
}
function removeLoader() {
    var loader = document.getElementById("page-loader");
    if (loader) {
        removeFromBody(loader);
    }
}
function renderHeader() {
    var header = document.createElement("header");
    header.classList.add("flipkart-parent-header");
    var logoH1 = document.createElement("h1");
    logoH1.style.width = "fit-content";
    logoH1.style.marginTop = "0px";
    logoH1.classList.add("margin-bottom-5");
    var logoAnchor = document.createElement("a");
    logoAnchor.href = "https://www.flipkart.com/";
    logoAnchor.id = "flipkart-logo";
    logoAnchor.classList.add("flipkart-logo-link");
    logoAnchor.target = "_blank";
    logoAnchor.innerHTML = "Flipkart";
    logoH1.appendChild(logoAnchor);
    var searchInput = document.createElement("input");
    searchInput.id = "header-search-input";
    searchInput.classList.add("margin-bottom-5");
    searchInput.type = "search";
    searchInput.placeholder = "Search";
    var sellerDiv = document.createElement("div");
    sellerDiv.classList.add("margin-bottom-5");
    sellerDiv.style.width = "fit-content";
    var sellerAnchor = document.createElement("a");
    sellerAnchor.href =
        "https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect";
    sellerAnchor.classList.add("flipkart-header-item-link");
    sellerAnchor.target = "_blank";
    sellerAnchor.innerHTML = "Become a Seller";
    sellerDiv.appendChild(sellerAnchor);
    var cartDiv = document.createElement("div");
    cartDiv.classList.add("margin-bottom-5");
    cartDiv.style.width = "fit-content";
    var cartAnchor = document.createElement("a");
    cartAnchor.href =
        "https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART";
    cartAnchor.classList.add("flipkart-header-item-link");
    cartAnchor.target = "_blank";
    cartAnchor.innerHTML = "Cart";
    cartDiv.appendChild(cartAnchor);
    header.appendChild(logoH1);
    header.appendChild(searchInput);
    header.appendChild(sellerDiv);
    header.appendChild(cartDiv);
    addToBody(header);
}
function renderLoader() {
    var loaderContainerDiv = document.createElement("div");
    loaderContainerDiv.classList.add("loader-container");
    var loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader");
    loaderContainerDiv.id = "page-loader";
    loaderContainerDiv.appendChild(loaderDiv);
    return loaderContainerDiv;
}
function renderProductList(cards: IProduct[]) {
    for (var i in cards) {
        renderSingleProduct(cards[i]);
    }
}
function renderSingleProduct(product: IProduct) {
    var productDiv = document.createElement("div");
    productDiv.classList.add("flipkart-product-card");
    var productAnchor = document.createElement("a");
    productAnchor.href = product.productPageLink.url;
    productAnchor.classList.add("flipkart-product-card-anchor");
    productAnchor.target = "_blank";
    var productWrapperDiv = document.createElement("div");
    productWrapperDiv.classList.add("flipkart-product-card-wrapper");
    var productImg = document.createElement("img");
    productImg.src = product.image.url;
    productImg.height = product.image.height;
    productImg.width = product.image.width;
    productImg.alt = product.image.alt;
    var productDetailsWrapper = document.createElement("div");
    productDetailsWrapper.classList.add("flipkart-product-card-details-wrapper");
    var productTitle = document.createElement("b");
    productTitle.classList.add("flipkart-product-card-title");
    productTitle.innerHTML = product.title;
    var productReviewRatngPara = document.createElement("p");
    productReviewRatngPara.classList.add("flipkart-product-review-rating");
    var productStarRatingSpan = document.createElement("span");
    productStarRatingSpan.classList.add("flipkart-product-star-ratings");
    productStarRatingSpan.style.color = "white";
    productStarRatingSpan.style.fontSize = "20px";
    productStarRatingSpan.innerHTML = product.ratings.overallRating + " &#9733;";
    productReviewRatngPara.append(productStarRatingSpan, " ".concat(product.ratings.totalRatingsNum.toLocaleString("en-US"), " Ratings & ").concat(product.ratings.totalReviewsNum.toLocaleString("en-US"), " Reviews"));
    var productFeatureList = document.createElement("ul");
    productFeatureList.classList.add("flipkart-product-features-list");
    for (var j in product.featuresList) {
        var productFeature = document.createElement("li");
        productFeature.innerHTML = product.featuresList[j];
        productFeatureList.appendChild(productFeature);
    }
    productDetailsWrapper.append(productTitle, "\xA0\xA0\xA0", "\xA0\xA0\xA0", "\xA0\xA0\xA0", productReviewRatngPara, productFeatureList);
    var productPricingWrapper = document.createElement("div");
    productPricingWrapper.classList.add("flipkart-product-pricing-wrapper");
    var productPricingPara = document.createElement("p");
    productPricingPara.style.margin = "0px";
    productPricingPara.style.lineHeight = "20px";
    var productPrice = document.createElement("b");
    productPrice.classList.add("flipkart-product-price");
    productPrice.innerHTML = "&#8377; ".concat(product.price.finalPrice.toLocaleString("en-US"));
    var productMRP = document.createElement("s");
    productMRP.style.marginTop = "10px";
    productMRP.style.color = "#878787";
    productMRP.innerHTML = "&#8377; ".concat(product.price.mrp.toLocaleString("en-US"));
    var discountSpan = document.createElement("span");
    discountSpan.classList.add("flipkart-product-discount");
    discountSpan.innerHTML =
        product.price.discount.type == "PERCENT"
            ? "".concat(String(product.price.discount.data), "% off")
            : "&#8377; ".concat(String(product.price.discount.data), " off");
    let freeDeliverySpan: HTMLSpanElement | null = null;
    if (product.freeDelivery == true) {
        freeDeliverySpan = document.createElement("span");
        freeDeliverySpan.style.fontSize = "12px";
        freeDeliverySpan.innerHTML = "free delivery";
        freeDeliverySpan.id = "sdfasdss";
    }
    var exchangeOfferPrice = document.createElement("b");
    exchangeOfferPrice.innerHTML = "&#8377; ".concat(product.exchangeOfferDiscount.data.toLocaleString("en-US"));
    var bankOffersSpan = document.createElement("span");
    bankOffersSpan.style.color = "var(--green)";
    bankOffersSpan.style.fontWeight = "600";
    bankOffersSpan.innerHTML = product.bankOffersLink.buttonText;
    if (freeDeliverySpan) {
        productPricingPara.append(freeDeliverySpan);
    }
    productPricingPara.append(document.createElement("br"), "Upto ", exchangeOfferPrice, " off on Exchange", document.createElement("br"), bankOffersSpan);
    productPricingWrapper.appendChild(productPricingPara);
    productWrapperDiv.append(productImg, productDetailsWrapper, productPricingWrapper);
    productAnchor.appendChild(productWrapperDiv);
    var addToCartWrapper = document.createElement("div");
    addToCartWrapper.classList.add("flipkart-product-add-cart-input-wrapper");
    var addToCartInput = document.createElement("input");
    addToCartInput.classList.add("flipkart-product-add-cart-input");
    addToCartInput.type = "checkbox";
    addToCartInput.onchange = function () {
        var cartIndex = cart.indexOf(product.title);
        if (cartIndex > -1) {
            cart.splice(cartIndex, 1);
            addCartToast(false);
        }
        else {
            cart.push(product.title);
            addCartToast(true);
        }
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    if (cart.indexOf(product.title) > -1) {
        addToCartInput.checked = true;
    }
    var addToCartText = document.createElement("div");
    addToCartText.classList.add("flipkart-product-add-cart-input-placeholder");
    addToCartText.innerHTML = "Add to cart";
    addToCartWrapper.append(addToCartInput, addToCartText);
    var addToCompareWrapper = document.createElement("div");
    addToCompareWrapper.classList.add("flipkart-product-add-cart-input-wrapper");
    var addToCompareInput = document.createElement("input");
    addToCompareInput.id = "add-to-compare-input-".concat(product.title, "-").concat(product.image.url);
    addToCompareInput.classList.add("flipkart-product-add-cart-input");
    addToCompareInput.type = "checkbox";
    addToCompareInput.onchange = function () {
        var alreadyPresent = compareClick(product.title, product.image.url);
        compareStateChange(alreadyPresent);
    };
    var addToCompareText = document.createElement("div");
    addToCompareText.classList.add("flipkart-product-add-cart-input-placeholder");
    addToCompareText.innerHTML = "Add to Compare";
    addToCompareWrapper.append(addToCompareInput, addToCompareText);
    productDiv.append(productAnchor, addToCartWrapper, addToCompareWrapper);
    addToBody(productDiv);
}
function renderToastDiv() {
    var pageToast = document.createElement("div");
    pageToast.id = "page-toast";
    addToBody(pageToast);
}
function compareClick(title: string, img: string): boolean {
    var newCompareProductList: IProductCompare[] = [];
    var alreadyPresent: boolean = false;
    compareProductList.map(function (value: IProductCompare) {
        if (value.title == title && value.img == img) {
            alreadyPresent = true;
        }
        else {
            newCompareProductList.push(value);
        }
    });
    if (alreadyPresent) {
        compareProductList = newCompareProductList;
    }
    else {
        compareProductList.push({ title: title, img: img });
    }
    return alreadyPresent;
}
function addCartToast(added) {
    var toast: HTMLElement | null  = document.getElementById("page-toast");
    if (toast) {
        if (added) {
            toast.innerHTML = "Added to Cart";
        }
        else {
            toast.innerHTML = "Removed from Cart";
        }
        toast.classList.add("toast-animation");
        setTimeout(function () {
            toast?.classList.remove("toast-animation");
        }, 10000);
    }
}
function renderCompareDiv() {
    var compareButton = document.createElement("div");
    compareButton.id = "compare-button";
    compareButton.innerHTML = "COMPARE";
    compareButton.onmouseenter = function () {
        clearTimeout(compareWrapperTimeoutId);
        var compare = document.getElementById("compare-product-list-wrapper");
        if (compare) {
            compare.style.transform =
                "scale(1)";
        }
    };
    var compareCount = document.createElement("div");
    compareCount.id = "compare-count";
    compareButton.append(compareCount);
    document.body.appendChild(compareButton);
    var compareWrapper = document.createElement("div");
    compareWrapper.id = "compare-product-list-wrapper";
    compareWrapper.onmouseenter = function () {
        clearTimeout(compareWrapperTimeoutId);
    };
    compareWrapper.onmouseleave = function () {
        compareWrapperTimeoutId = setTimeout(function () {
            compareWrapper.style.transform = "scale(0)";
        }, 500);
    };
    var productList = document.createElement("div");
    productList.id = "compare-product-list";
    var removeAllButton = document.createElement("div");
    removeAllButton.id = "remove-all-button";
    removeAllButton.innerHTML = "REMOVE ALL";
    removeAllButton.onclick = removeAllCompare;
    compareWrapper.append(productList, removeAllButton);
    addToBody(compareWrapper);
}
function removeAllCompare() {
    compareProductList.map(function (value) {
        var input: HTMLInputElement = document.getElementById("add-to-compare-input-".concat(value.title, "-").concat(value.img)) as HTMLInputElement;
        input.checked = false;
    });
    compareProductList = [];
    compareStateChange(false);
}
function compareStateChange(alreadyPresent) {
    clearTimeout(compareWrapperTimeoutId);
    var compareButton = document.getElementById("compare-button");
    var compareProdList = document.getElementById("compare-product-list");
    var removeAll = document.getElementById("remove-all-button");
    var compareWrapper = document.getElementById("compare-product-list-wrapper");
    var compareCount = document.getElementById("compare-count");
    if (compareProductList.length == 0) {
        if (compareButton) {
            compareButton.style.visibility = "hidden";
        }
        if (compareProdList) {
            compareProdList.innerHTML = "";
        }
        if (removeAll) {
            removeAll.style.visibility = "hidden";
        }
        if (compareWrapper) {
            compareWrapper.style.visibility =
                "hidden";
        }
    }
    else {
        if (compareButton) {
            compareButton.style.visibility = "visible";
        }
        if (compareWrapper) {
            compareWrapper.style.visibility =
                "visible";
        }
        if ((compareProductList.length == 1 && !alreadyPresent) ||
            compareWrapper && compareWrapper.style.transform ==
                "scale(1)") {
            if (compareWrapper) {
                compareWrapper.style.transform =
                    "scale(1)";
            }
            compareWrapperTimeoutId = setTimeout(function () {
                if (compareWrapper) {
                    compareWrapper.style.transform = "scale(0)";
                }
            }, 2000);
        }
        if (removeAll) {
            removeAll.style.visibility =
                compareProductList.length > 1 ? "visible" : "hidden";
        }
        if (compareCount) {
            compareCount.innerHTML =
                compareProductList.length.toString();
        }
        var productList = document.getElementById("compare-product-list");
        if (productList) {
            productList.innerHTML = "";
        }
        for (var i in compareProductList) {
            var singleCompareProduct = document.createElement("div");
            singleCompareProduct.classList.add("single-compare-product");
            var singleCompareProductImg = document.createElement("img");
            singleCompareProductImg.src = compareProductList[i].img;
            singleCompareProductImg.width = 82;
            singleCompareProductImg.height = 112;
            var singleCompareProductTitle = document.createElement("div");
            singleCompareProductTitle.classList.add("single-compare-product-title");
            singleCompareProductTitle.innerHTML = compareProductList[i].title;
            var crossButton = document.createElement("img");
            crossButton.src =
                "https://assets.nextleap.app/images/cross_5c962769-88be-4cf8-93cd-2f52defa3f75.svg";
            crossButton.id = "cross-button";
            crossButton.width = 12;
            crossButton.height = 12;
            crossButton.onclick = function () {
                var input: HTMLInputElement = document.getElementById("add-to-compare-input-".concat(compareProductList[i].title, "-").concat(compareProductList[i].img)) as HTMLInputElement;
                input.checked = false;
                var alreadyPresent = compareClick(compareProductList[i].title, compareProductList[i].img);
                compareStateChange(alreadyPresent);
            };
            singleCompareProduct.append(singleCompareProductImg, singleCompareProductTitle, crossButton);
            if (productList) {
                productList.appendChild(singleCompareProduct);
            }
        }
    }
}
function renderFooter(footerData) {
    var footer = document.createElement("footer");
    footer.classList.add("flipkart-parent-footer");
    var columns = footerData.colunms;
    var _loop_1 = function () {
        var column = document.createElement("div");
        if (i == 0) {
            column.style.paddingLeft = "65px";
        }
        if (columns[i].dataType == "REGISTERED_ADDRESS") {
            column.style.paddingLeft = "14px";
            column.style.marginRight = "65px";
        }
        var columnTitle = document.createElement("div");
        columnTitle.classList.add("flipkart-parent-footer-list-title");
        columnTitle.innerHTML = columns[i].title;
        if (columns[i].dataType == "MAIL_ADDRESS") {
            columnTitle.style.padding = "0px 25px";
            columnTitle.style.borderLeft = "1px solid #454d5e";
        }
        column.appendChild(columnTitle);
        if (columns[i].dataType == "ARRAY") {
            var colunmContent_1 = document.createElement("div");
            colunmContent_1.classList.add("flipkart-parent-footer-list-items");
            var listStrings = (columns[i].data);
            listStrings.map(function (item) {
                var columnListItem = document.createElement("div");
                columnListItem.innerHTML = item;
                colunmContent_1.appendChild(columnListItem);
            });
            column.appendChild(colunmContent_1);
        }
        else if (columns[i].dataType == "MAIL_ADDRESS" ||
            columns[i].dataType == "REGISTERED_ADDRESS") {
            var colunmContent = document.createElement("p");
            colunmContent.classList.add("flipkart-parent-footer-list-p-content");
            if (columns[i].dataType == "MAIL_ADDRESS") {
                colunmContent.style.padding = "0px 25px";
                colunmContent.style.borderLeft = "1px solid #454d5e";
            }
            colunmContent.innerHTML = columns[i].data;
            column.appendChild(colunmContent);
        }
        footer.append(column);
    };
    for (var i = 0; i < columns.length; i++) {
        _loop_1();
    }
    addToBody(footer);
}
