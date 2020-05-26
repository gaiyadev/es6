let person = {
    name: 'Obed',
    age: 34

};
//dot notation
person.age = 67;
//bracket notation
person['name'] = 'Jude';

//array
let selectedColor = ['red', 'blue'];
selectedColor[2] = 2;


//..Function
function greeting(name, lastName) {
    console.log('hello mallam' + name + " "+ lastName);

}
greeting('Obed', "Gaiya");
greeting('Jude');

