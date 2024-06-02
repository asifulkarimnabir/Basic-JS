const score = 200;
// console.log(score);

const balance = new Number(23);
// console.log(balance);
// console.log(balance.toString().length);

// console.log(balance.toFixed(3));

const forPrecision = 232.84563;
// console.log(forPrecision.toPrecision(5));

const hundreds = 100000000;
// console.log(hundreds.toLocaleString("en-IN"));

// --- Maths  ---

// console.log(Math);
// console.log(Math.abs(-3));

// console.log(Math.floor(34.54));

// console.log(Math.round(34.54));

// console.log(Math.ceil(34.54));

// console.log(Math.trunc(34.54));

// console.log(Math.max(3, 4, 54, 2, 56, 64));
// console.log(Math.min(3, 4, 54, 2, 56, 64));

// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomValue);
