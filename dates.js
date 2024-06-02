//  -- Dates --

const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2074, 4, 24);
// console.log(myCreatedDate.toString());

let myCreatedDate = new Date("2024-06-02");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

// newDate.toLocaleString("default", {
//   weekday: "long",
// });
