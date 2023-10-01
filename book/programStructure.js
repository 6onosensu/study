import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let result = 1;

/*
// 2 v stepeni 10
let counter = 0;
while (counter <= 9) {
  result = result * 2;
  counter++;
}
console.log(result);
*/



/*
let theNumber = Number(prompt('Input the number: '))
if (!Number.isNaN(theNumber)) {
  const result2 = theNumber * theNumber;
  console.log('This number is the square root of ' + result2);
  if (result2 < 10) {
    console.log("Small value")
  } else if (result < 1000) {
    console.log("Average value")
  } else {
    console.log("Large value")
  }
} else {
  console.log("Hey, why didn't you enter a number? ");
}
*/



/*Do loop is similar to the while loop. Its difference is "do" loop always perfoms 
his body once and checks whether he needs to stop only after the first execution*/
/*
let yourName;
do {
  yourName = prompt('What is your name? ');
} while (!yourName);
console.log("Hi! " + yourName);
*/



//For loop
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

for (let counter1 = 0; counter1 < 10; counter1++) {
  result *= 2;
}
console.log("'For loop' 2 v stepeni 10 is " + result);

//Forceful exit from a loop
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}



//Dispatching by purpose using Switch
/**
 * if (x == "value1") action1();
 * else if (x == "value2") action2();
 * else if (x == "value3") action3();
 * else defaultAction();
 */

switch (prompt("What is the wether like now? ")) {
  case "rain":
    console.log("Don't forget to take an umbrella.");
    break;
  case "sunny":
    console.log("Dress causally.");
    break;
  case "cloudy":
    console.log("Go for a walk");
    break;
  default:
    console.log("Unknown weather!")
    break;
}