const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // no of decimals in answer

const otherNumber = 123.5632;

console.log(otherNumber.toPrecision(4)); // total 4 digits(3 whole and 1 decimal)

const hundreds = 1000000;

// console.log(hundreds.toLocaleString("en-IN")); // it will provide commas a/c to indian currency.


// ************************************Maths*********************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);