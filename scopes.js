var globalVariable = "I'm in global scope";

function myFunction() {
  console.log("Function: ", globalVariable);
}
// myFunction();

// let num1 = 200;
// const num2 = 300;
// var num3 = 400;

if (true) {
  let num1 = 200;
  const num2 = 300;
  var num3 = 400;

  //   console.log("Inner: ", num1);
  //   console.log("Inner: ", num2);
  //   console.log("Inner: ", num3);
}

// console.log(num1);  //ReferenceError: num1 is not defined
// console.log(num2);  //ReferenceError: num2 is not defined
// console.log(num3);

function one() {
  const username = "nabir";
  // console.log(age); //ReferenceError: age is not defined

  function two() {
    const age = 23;
    var price = 300;
    console.log(username);
  }
  console.log(price);
  two();
}
// one();

if (true) {
  const name = "asif";
  if (true) {
    const email = "arif@gmail.com";
    let price = 240;
    var age = 24;
    // console.log(name);
  }
  // console.log(email);//ReferenceError: email is not defined
  // console.log(price); //ReferenceError: price is not defined
  // console.log(age);
}

function addOne(num1) {
  return num1 + 1;
}
console.log(addOne(5));

// console.log(addTwo(5)); //ReferenceError: Cannot access 'addTwo' before initialization
var addTwo = function (num2) {
  return num2 + 2;
};
// console.log(addTwo(5));
