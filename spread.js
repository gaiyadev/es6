let num = [3, 4, 5, 6];
let num2 = [4, 5, ...num];
console.log(num2);

function f(a, b, ...args) {
    console.log(args);
}

f(1, 2, 3, 4, 5);