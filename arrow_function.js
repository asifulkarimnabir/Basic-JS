const user = {
  username: "nabir",
  price: 230,
  welcomeMessage: function () {
    console.log(`${this.username}  ,  welcome to our website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "asif";
// user.welcomeMessage();

// console.log(this);

// function nameString() {
//   let name = "arif";
//   console.log(this.name);
// }

// nameString();

// const arrowFunction = () => {
//   let name = "arif";
//   console.log(this.name);

const arrowFunction = () => {
  let name = "arif";
  // console.log(this);
};
arrowFunction();

// const addOne = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addOne(3, 5));

const addOne = (num1, num2) => num1 + num2;

console.log(addOne(3, 5));
