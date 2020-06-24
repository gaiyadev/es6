
//Rest and Spread
const sum = (...args) => {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}


//console.log(sum(1, 2, 3))


const multiple = (...args) => {
    let ans = 4;
    for (let i of args) {
        ans *= i;
    }
    return ans;
}
let j = multiple(3, 4, 6, 6);
console.log(j);

const add = (...args) => {
    for (let j of args) {
        let total = 0;
        return total += j;
    }
    return total;


}
console.log(add(5, 6));