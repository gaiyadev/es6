class Animal {
    constructor(type, model) {
        this.type = type;
        this.model = model;
    }
    identify() {
        console.log(this.type);
        console.log(this.model);
    }
}
class Dog extends Animal {

    identifyy() {
        console.log(this.age);
        console.log(this.sex);
    }
}


let cat = new Animal('Cat', "Toyota");
let dog = new Dog(23, 'maile')
dog.identify();
cat.identifyy();
console.log(typeof Animal); // function
