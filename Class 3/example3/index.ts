interface IAddress {
    city: String,
    pincode: Number | String
}

interface IKeyPair<K=string, V=string> {
    key1: K,
    key2: V
}


const carKey: IKeyPair = {
    key1: 'PublicKey',
    key2: 'APIKey'
}

const fbKey: IKeyPair<String, number> = {
    key1: 'PublicKey',
    key2: 12345678
}

interface ISecret {
    secret: string
}

const randomKey: IKeyPair<ISecret, string[]> = {
    key1: {
        secret: 'sdkfgsdjf'
    },
    key2: ['asdsa', 'asdasd']
}

// function generic in functions

function getFirstRecord<T>(arr: T[]):T {
    return arr[0];
}

const firstNumber: number = getFirstRecord([1,2,3,4]);
console.log(firstNumber);
const firstString: string = getFirstRecord(['a','b','c'])
console.log(firstString);


// Extends in generic

interface IPersonDetail {
    name: string
}

function getName<T extends IPersonDetail>(obj: T) {
    return obj.name;
}

console.log(getName({
    name: 'Chirag Goel',
    city: 'Bangalore'
}))


