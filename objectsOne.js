// singleton
// Object.create

// Object literal

const mySml = Symbol("key1");

const jsUser = {
  name: "Nabir",
  "full name": "Asif ul",
  [mySml]: "mykey1",
  age: 24,
  location: "Naria",
  email: "nabir@gmail.com",
  isLoggedIn: false,
  lastLoggedIn: ["Monday,Friday"],
};
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.lastLoggedIn);

// console.log(jsUser[mySml]);
// console.log(typeof jsUser[mySml]);

jsUser.email = "nabir@yahoo.com";
// Object.freeze(jsUser);
jsUser.email = "nabir@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
// console.log(jsUser["greeting"]);
// console.log(jsUser["greeting()"]);

// console.log(jsUser.greetingTwo);
// console.log(jsUser.greetingTwo());
// console.log(jsUser["greeting"]);
// console.log(jsUser["greeting()"]);
