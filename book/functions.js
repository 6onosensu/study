
function square(x) {
  return x * x;
}
console.log(square(5));

console.log("The voice from the future: ", future());
function future() {
  return "Flying cars don't exist"
}


// Arrow functions
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));

const square1 = x => { return x * x; };
const square2 = x => x * x;

const horn = () => {
  console.log("Toot");
};


//Call atack
function greet(who) {
  console.log("Hi, " + who);
}
greet("Harry");
console.log("Bye!");


// Optional arguments
console.log(square2(4, true, "hedgehog"));
//=> 16

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10) + " " + minus(10, 5));

function power1(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power1(4) + " " + power1(2, 6));


//  Замыкание - Closure
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));


//Recursion
function power3(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power3(base, exponent - 1);
  }
}
console.log(power(2, 3));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));