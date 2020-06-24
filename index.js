// let person = {
//     name: 'Obed',
//     age: 34

// };
// //dot notation
// person.age = 67;
// //bracket notation
// person['name'] = 'Jude';

// //array
// let selectedColor = ['red', 'blue'];
// selectedColor[2] = 2;


// //..Function
// function greeting(name, lastName) {
//     console.log('hello mallam' + name + " "+ lastName);

// }
// greeting('Obed', "Gaiya");
// greeting('Jude');

var a = 10;
var a;
console.log(window.a); // 10
let a = 10;
console.log(window.a); // undefine. why because is a block scope not global or local scope like var

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}


//var can be a global or local scope which become an property of the window object
// var can be redeclare
//let is block scope and can not be redeclar
