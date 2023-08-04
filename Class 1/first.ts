var a: number;
var b: number;
b = 20;
a = 10;


let fullName: string = "Chirag";
let company: string = 'Microsoft';
let experience: number = 10;
let techStack: string[] = ['JS, TS', 'React', 'Node'];
let address: Address = {
    city: 'Bangalore',
    pincode: 560067,
};

// type | interface

type Address = {
    city: String,
    pincode: number
}

let isIndian: boolean = true;

let salary: any = 'XXXXXXXX';
salary = 42938479824923;

let creator: string | null | undefined;
creator = null;
creator = undefined;
creator = 'Chakde System Design';

enum GENDER {
    MALE='MALE',
    FEMALE='FEMALE',
    OTHER='OTHER'
}

let gender: GENDER = GENDER.MALE;
