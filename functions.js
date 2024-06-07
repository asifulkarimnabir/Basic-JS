// function

// sayMyName();
function sayMyName() {
  console.log("N");
  console.log("a");
  console.log("b");
  console.log("i");
  console.log("r");
}

// sayMyName();

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }
// const result = addTwoNumber(2, "3");
// console.log("show result: ", result);

function addTwoNumber(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}
const result = addTwoNumber(2, "3");
// console.log(" result: ", result);

function loginUserMessage(username = "arif") {
  //   if (username === undefined) {
  if (!username) {
    console.log("please give a username");
    return;
  }
  return `${username} just loggd In`;
}
// const loginStatus = loginUserMessage(); //;undefined
const loginStatus = loginUserMessage("Nabir");
// console.log(loginStatus);

function calculateCarPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCarPrice(300, 33, 53, 454));

const userObj = {
  username: "maruf",
  price: 222,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username}.and price is ${anyobject.price}`
  );
}
handleObject(userObj);

const arr = [3, 5, "arif", true];

function handleArr(anyarr) {
  console.log(`array is ${anyarr[2]}.  ${anyarr}`);
}
handleArr(arr);
