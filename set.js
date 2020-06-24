let chars = new Set(['a', 'a', 'b', 'c', 'c', 8, 9]);
chars.add('er');
chars.add(56);
chars.delete('a')
chars.clear();

console.log(chars);
console.log(typeof (chars))