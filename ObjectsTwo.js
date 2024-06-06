const constructor = new Object(); // singleton
// console.log(constructor);

const instaUser = {}; // non-singleton
// console.log(objLiteral);

instaUser.id = 23234;
instaUser.name = "nabir";
instaUser.email = "nabir!@gmail.com";

// console.log(instaUser);

const facebookUser = {
  email: "abir@gamil.com",
  age: 23,
  fullName: {
    userfullname: {
      firstName: "abir",
      lastName: "rahman",
    },
  },
};

// console.log(facebookUser.fullName?.userfullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const addObj = { obj1, obj2 };
const allObj = Object.assign({}, obj1, obj2);
// console.log(allObj);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const userData = [
  {
    id: 1,
    email: "abir@gmail.com",
  },
  {
    id: 1,
    email: "rakib@gmail.com",
  },
  {
    id: 1,
    email: "sabbir@gmail.com",
  },
  {
    id: 1,
    email: "tarekh@gmail.com",
  },
];
// console.log(userData);

// console.log(userData[1].email);

// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("name"));
// console.log(instaUser.hasOwnProperty("names"));

// ---------------------------

const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  courseInstructor: "anik ahmed",
};

// let name;
({ name } = user);
// console.log(name);

const { salary = 232 } = user;
// console.log(salary);

const { courseInstructor: instructor } = user;
console.log(instructor);
