// Scope:
function testing() {
  var abc = 20;
  let def = 100;
  console.log(abc);

  // Block scope
  if (1) {
    var xyz = "block scoped";
    console.log("Inside If", xyz);
    console.log(abc);
  }
  console.log("Outside if", xyz);
}

testing();

var name = "Cipher";
let year = 2020;
function test() {
  console.log(name);
  console.log(year);
}

test();

myFunc();
// myFunc2(); // This would result in an error since myFunc2 is a variable and not hoisted before this line

function myFunc() {
  console.log("Inside myFunc Declaration");
}

// Function expression
let myFunc2 = function () {
  console.log("Inside myFunc2: function expression");
};

console.log(name2); // Undefined, as the variable is hoisted but not initialized yet
// name(); // This would result in an error since name is a variable and not hoisted before this line

var name2 = "prabhat";

function name() {
  console.log("hello");
}

// Arrow Functions - es6 Feature

let newFunc = () => {
  console.log("Arrow Functions Created");
  console.log(this); // 'this' in arrow functions refers to the enclosing context (lexical scoping)
};

newFunc();

let funcExp = function () {
  console.log(" Function expression Created");
  console.log(this); // 'this' in regular functions depends on how they are called
};

funcExp();

let newFun = (name) => console.log(name);
newFun("cipher");
