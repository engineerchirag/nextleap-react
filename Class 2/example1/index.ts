// type & interface

// let person: Person = {
//     fullName: 'Chirag',
//     age: 30,
//     city: 'Bangalore'
// };

// type Person = {
//     fullName: string,
//     age: number,
//     city: string
// }

// let student: IStudent = {
//     fullName: 'Leela',
//     city: 'Ongole',
//     course: 'Frontend'
// }

// interface IStudent {
//     fullName: string,
//     city: string,
//     course: string
// }

// type

// let pincode: Pincode;
// pincode = 809890;
// pincode = '809890';

// type Pincode = string | number | null;

// Interface

interface IStudent {
    fullName: string,
    city: string,
}

interface IFullStackCourse extends IStudent {
    courseName: string,
    startDate: string
}

let student: IFullStackCourse = {
    fullName: 'Leela',
    city: 'Ongole',
    courseName: 'Frontend',
    startDate: '18/07/2023',
}

// Type

type Product = {
    title: string,
    description: string,
    price: number
}

type Television = {
    audioType: string,
    display: string,
    size: string
}

type TelevisionProduct = Product & Television;

let miTv: TelevisionProduct = {
    title: 'MI',
    description: 'New MI TV',
    price: 30000,
    audioType: 'st',
    display: 'wide',
    size: '200x300'
}


// Type

type Rectangle = {
    width: number,
    height: number
}

type Square = {
    size: number
}

type Circle = {
    radius: number
}

type Shape = Rectangle | Square | Circle;

let mySquare: Shape = {
    size: 20,
    width: 20
}

let myRectangle: Shape = {
    width: 20,
    height: 20
}

let myCircle: Shape = {
    radius: 20
}




let abc = {
    x: 1,
    y: 2,
    address: [{
        pincode: 1232,
    }],
    members: ['A', 'B', 'C']
}

interface IAbc {
    x: number;
    y: number;
    address: IAddressss[],
    members: string[]
}

interface IAddressss {
    pincode: number
}












