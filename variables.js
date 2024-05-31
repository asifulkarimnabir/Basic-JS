// ---var keyword-----------

// ---undefined---
// var name;
// console.log(name);

// ---undefined---
// console.log(name);
// var name;

// ---normal---
// var name = "Asif";
// console.log(name);

// ---undefined---
// console.log(name);
var name;
name = "Asif";

// ---undefined---
// console.log(product);
var product;
product = "Bread";

// ---let keyword-----------

// ---undefined---
let groups;
// console.log(group);

//-- ReferenceError: Cannot access 'group' before initialization--
// console.log(group);
let group;

// ---normal---
let subject1 = "English";
// console.log(subject1);

// ---ReferenceError: Cannot access 'subject' before initialization--
// console.log(subject2);
let subject2 = "Biology";

//--- Global Scope---

const grapes = "🍇";

// Functional Scope
function logGrapes() {
  var grapesPrice = 400;
  // console.log(grapesPrice);
  // console.log(grapes); // 🍇
  // console.log(mango);

  // Block Scope in a Functional Scope
  {
    // console.log(grapes); // 🍇
    // console.log(grapesPrice);
    let mango = "24kg";
    // console.log(mango);
  }
  // console.log(mango);
}
logGrapes();
// ReferenceError: grapesPrice is not defined
// console.log(grapesPrice);

// Block Scope
{
  // console.log(grapes); // 🍇
}

// ---Block Scope---
{
  const banana = "🍌";
  {
    // console.log(banana + " Banana");

    var carrot = "🥕";
    const lemon = "🍋";
  }
  // console.log(carrot); // 🥕
  // console.log(lemon); // ReferenceError: lemon is not defined
}
