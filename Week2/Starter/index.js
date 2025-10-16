// Primitive Data Types
//Numbers
// Numbers can be whole inegers or decimals
1;
3.14;

// Numbers have operators for arithmetic
// console.log(1 + 1);
// console.log(10 - 1);
// console.log(10 * 10);
// console.log(2 ** 4);
// console.log(10 / 2);
// console.log(11 % 2); //Modulus or Remainder operator

// let i = 1;
// console.log(i++); // Increment +1
// console.log(i);
// console.log(i--); // Decrement -1
// console.log(i);
// console.log((i += 10));
// console.log((i -= 5));

//Strings
//Strings can use '', "", or `` (template literals)
// let name = "Rose";
// let greeting = `Hello ${name}, it's nice to meet you!`;
// console.log(greeting);

// let math = `One and One is ${1 + 1}`;
// console.log(math);

// //Escape characters
// console.log("'Hello'");
// console.log('"World"');
// // \" \'
// console.log('""');

// Your turn: Write a template literal mad lib!
// Create variables: name, noun, adjective, and object
// Then create a template literal and print the sentence
// Example: `[Name] accidentally turned the [noun] into a [adjective] [object]!`

// let name = "Gandalf";
// let noun = "food bowl";
// let adjective = "scary";
// let object = "vacuum";
// console.log(
//   `${name} accidentally turned the ${noun} into a ${adjective} ${object}!`
// );

// Booleans
// Truthy and Falsy values
// console.log(!true);
// console.log(!!true);
// //Everything is truthy except these falsy values:
// console.log(0, !!0);
// console.log('""', !!"");
// console.log("nulls", !!null);
// console.log("undefined", !!undefined);
// console.log("NaN", !!NaN);
// console.log("0n", !!0n);

//BigInt
//Very Big numbers, Js is only accurate up to 15 digets
// let bigNum = 99999999999999999999999999999n;
// let bigNumberTwo = BigInt(1111111111111111111111);
// console.log(bigNum);
// console.log(bigNumberTwo);

//Symbol
// Used to create a unique property key
// let uniqueSymbol1 = Symbol("cat");
// let uniqueSymbol2 = Symbol("cat");
// console.log(uniqueSymbol1);
// console.log(uniqueSymbol2);
// console.log(uniqueSymbol1 === uniqueSymbol2);

//undefined
// Some does not have a value
// let a;
// console.log(a);

// //Null
// // Absence of a value
// console.log(null);

// //Type of
// let age = 300;
// console.log(typeof age);

// //variables
// let hungry = false;
// hungry = true;
// console.log(hungry);

// const BESTCAT = "Rose";
// BESTCAT = "Tom";

// //Functions
// function foo(num1, num2) {
//   return num1 + num2;
// }
// console.log(foo(1, 2));

// // Funciton expressions
// const boo = function () {
//   return "boo";
// };
// console.log(boo());

// // Arrow Functions
// const goo = () => {
//   return "goo";
// };
// console.log(goo());

// const faveFood = (food) => `I love ${food}`;
// console.log(faveFood("cookies"));

// // Hoisting
// wow();
// function wow() {
//   console.log("Wow, I can be called before I'm defined!");
// }

// // Your turn: Write a function that converts human years to dog years
// // dog years are 7 for every 1 human year
// const humanToDogYears = (humanYears) => humanYears * 7;
// console.log(humanToDogYears(14));

//Conditions
//Logic operators
// && (AND), || (OR), !(NOT)
// console.log(1 == "1");
// console.log(1 === "1");

// let weather = "Rainy";
// let home = "Seattle";

// if (weather === "Sunny") {
//   console.log("Wear shorts");
// } else if (weather === "Rainy" && home !== "Seattle") {
//   console.log("Get an umbrella");
// } else if (weather === "Rainy" && home === "Seattle") {
//   console.log("Don't get umbrella, just go out in the rain.");
// } else {
//   console.log("Wear long pants or a skirt");
// }

// //Switch Statements
// function energyCheck(energyLevel) {
//   switch (energyLevel) {
//     case "High":
//       return "Run off some energy";
//     case "Mid":
//       return "Do nothing";
//     case "Low":
//       return "Get Caffeine";
//     default:
//       return "Take a Nap";
//   }
// }
// console.log(energyCheck("Low"));

// // Your Turn: Write a function that determines if a number is odd or even
// // It should take a number as a parameter and return "ODD" or "EVEN"

// let oddOrEven = (num) => (num % 2 == 0 ? "EVEN" : "ODD");

// function gratuityCalculator(total, numberOfPatrons) {
//   let tip = 0;

//   if (numberOfPatrons === 2) {
//     tip = total * 0.15;
//   } else if (numberOfPatrons > 2 && numberOfPatrons < 6) {
//     tip = total * 0.2;
//   } else if (numberOfPatrons >= 6) {
//     tip = total * 0.3;
//   } else {
//     tip = total * 0.1;
//   }
//   return total + tip;
// }

// console.log(gratuityCalculator(120, 4));

// //Strings
// //Specific characters can be accessed by index
// console.log("cat"[0]);
// let cat = "rose";
// console.log(cat.length);
// console.log("I don't like cats".replace("don't", "do"));

// //Numbers
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 100));

// //Your Turn:
// // Write a function that simulates rolling a dice.
// // The function should take the number of sides as a parameter and return a random number between 1 and that number.
// function rollingDice(num) {
//   let result = Math.floor(Math.random() * num + 1);
//   return result;
// }
// console.log(rollingDice(5));

// //Scope
// let speedLimit = 60; //Global

// function checkSpeed(currentSpeed) {
//   if (currentSpeed > speedLimit) {
//     var warning = "Slow Down!";
//   } else {
//     var warning = "You're within the limit";
//   }
//   return warning;
// }
// console.log(checkSpeed(70));
// console.log(warning);

//Werid JS Behavor
// console.log(typeof NaN);
console.log(NaN === "NaN");
console.log(isNaN(NaN));

// console.log(1 + "2");
// console.log("100" - 25);

// console.log(typeof null);
