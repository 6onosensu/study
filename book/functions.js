
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