//Minimum
let min = (a, b) => Math.min(a, b);
console.log(min(5, 4));

function min1(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(min1(9, 2));


//Recursion
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//Letter counting
function countChar(string, ch) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) counter++;
  }
  return counter;
}

function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));