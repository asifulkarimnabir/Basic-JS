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

// console.log(myArr3.includes(5));
// console.log(myArr3.indexOf(54));

// console.log(myArr3);

const myNewArr = myArr3.slice(2, 4);
// console.log("A", myArr3);
// console.log(myNewArr);

const myNewArr2 = myArr3.splice(2, 4);
// console.log("B", myArr3);
// console.log(myNewArr2);

//-----------------------------

const cric_player = ["Rizwan", "Sakib", "Mushfiqh"];
const ft_player = ["Jamal", "Tariq", "Fahim"];

// cric_player.push(ft_player);
// console.log(cric_player);

const allPlayer = cric_player.concat(ft_player);
// console.log(allPlayer);

const all_new_player = [...cric_player, ...ft_player];
// console.log(all_new_player);

const another_array = [1, 2, 3, [3, 5, 5, 6], 7, [7, 4, 7, [3, 7]], 8];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("nabir"));
// console.log(Array.from("nabir"));
// console.log(Array.from({ name: "nabir" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
