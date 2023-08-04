// Readonly
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

type IPerson = {
    name: string,
    city: string
}

type ReadOnlyChiniDetail = ReadOnly<IPerson>;

const ChiniDetail: ReadOnlyChiniDetail = {
    name: 'Chini',
    city: 'Hyderabad'
};

// ChiniDetail.city = 'Bangalore';

// Partial

type Partial1<T> = {
    [P in keyof T]?: T[P]
}

type Required1<T> = {
    [P in keyof T]-?: T[P]
}

type IPerson1 = {
    name: string,
    city: string,
    age?: number
}

const ShabaadDetail: Partial1<IPerson1> = {
    name: 'Chini',
};

const ShabaadCompleteDetail: Required1<IPerson1>  = {
    name: 'Chini',
    city: 'Jaipur',
    age: 18
}

type IPersonWithName = Pick<IPerson1, 'name'>;

const PersonWithName: IPersonWithName = {name: 'Abc'};

const PersonWithoutName: Omit<IPerson1, 'name' | 'age'> = { city: 'Bangalore'};
