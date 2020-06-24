//arrat destructuring

const getScores = () => {
    return [70, 80, 90, 100];
}

let [w, x, y, z] = getScores();

console.log(w); // 70
console.log(x); // 80
console.log(y); // 90
console.log(z); // 100



const letScores = () => {
    return [70, 80, 90, 100];
}

let [a, b, ...args] = letScores();
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]


const stat = (a, b) => {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}

let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10


//Object dwstructuring

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let {
    firstName: fname,
    lastName: lname
} = person;
console.log(person);

console.log('==============');

let {
    firstName,
    lastName
} = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'