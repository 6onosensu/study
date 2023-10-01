

// Triangle
function triangle() {
  for (let i = '#'; i.length <= 7; i += '#') {
    console.log(i);
  }
}
triangle();


// FizzBuzz
function FizzOrBuzz() {
  for (let current = 1; current <= 100; current++) {
    if (current % 3 == 0 && !current % 5 == 0) {
      console.log("Fizz");
    } else if (current % 5 == 0 && !current % 3 == 0) {
      console.log("Buzz");
    } else {
      console.log(current);
    }
  }
}
//FizzOrBuzz();

function FizzBuzz() {
  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
}
//FizzBuzz();


//Chess
function Chess() {
  let size = 8;
  let board = "";

  for (let y = 0; y <= size; y++) {
    for (let x = 0; x <= size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  console.log(board);
}
Chess();