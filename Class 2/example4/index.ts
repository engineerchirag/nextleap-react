type Pincode = number | string;

type MyAddress = {
    pincode: Pincode
}

const myAddress: MyAddress = {
    pincode: '560067'
}

function getPincodeFromAddress(address: MyAddress): number {
    if (typeof address.pincode === 'string') {
        return Number(address.pincode);
    }
    return address.pincode;
}

console.log(getPincodeFromAddress(myAddress))