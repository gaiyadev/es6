function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
let f = generate()

console.log(f.next())
console.log(f.next())
//generate()