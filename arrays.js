const myArr = [
  "amir",
  "abbas",
  3,
  6,
  true,
  [2, 5, "rasel", false],
  { name: "sabbir", age: "22" },
];

// console.log(myArray);
// console.log(myArr[6]);

const myArr2 = new Array("anik", 23, 6, true, 3);
// console.log(myArr2);

// Array methods

myArr2.push(55);
myArr2.push(85);
myArr2.pop();

myArr2.unshift(44);
myArr2.unshift(84);
myArr2.shift();

// console.log(myArr2);

const myArr3 = [1, 2, 3, 4, 5];

console.log(myArr3.includes(5));
console.log(myArr3.indexOf(54));

console.log(myArr3);
