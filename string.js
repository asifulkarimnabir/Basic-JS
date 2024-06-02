const name = "Nabir";
const age = 24;

// console.log(name + age); // not preferred
// console.log(`My name is ${name}. And I am ${age} years old.`);
// console.log(name.toUpperCase());

const gameName = new String("Amazing Brick-game");

// console.log(gameName);
// console.log(gameName[3]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.substring(0, 4));

const checkSlice = gameName.slice(0, 4);
// console.log(checkSlice);

const checkTrim = "   abir ayman    ";
// console.log(checkTrim);
// console.log(checkTrim.trim());

const url = "https://asif%20ul%20karim%20nabir.com";
console.log(url.replace("%20", "-"));
console.log(url.replace("%20", "-"));

console.log(url.includes("asi"));

console.log(gameName.split(" "));

console.log(gameName);
