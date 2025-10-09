// Primitive Data Types
// Number `1`
// Numbers can be whole integers or decimals
1;
3.15;

// Numbers have operators for arithmetic
console.log(1 + 1);
console.log(10 - 1);
console.log(10 * 10);
console.log(2 ** 4);
console.log(10 / 2);
console.log(11 % 2); // Modulus or Remainder operator

let i = 1;
console.log(i++); // Increment +1
console.log(i--); // Decrement -1
console.log((i += 10)); // Increment by a specific value
console.log((i -= 5)); // Decrement by a specific value

// String `'cat'` or `"cat"` or even ``cat``
// Strings can use '', "", or `` (template literals)
let name = "Rose";
let greeting = `Hello ${name}, it's nice to meet you!`;
console.log(greeting);

// Template literals can include any JS code inside ${}
let math = `One and one is ${1 + 1}`;

// Concatenation also works in JavaScript
let animal = "Sharks";
let sentiment = "are cute";
console.log(animal + " " + sentiment);

// Escape characters
// To show quotes inside strings:
console.log("'Hello'");
console.log('"World"');
console.log('""'); // Nesting quotes works too

// Your turn: Write a template literal mad lib!
// Create variables: name, noun, adjective, and object
// Then create a template literal and print the sentence
// Example: `[Name] accidentally turned the [noun] into a [adjective] [object]!`

// Boolean `true` or `false`
// Truthy and Falsy values
// Everything is truthy except these falsy values: false, 0, "", null, undefined, NaN, 0n
console.log(!true); // ! negates a boolean
console.log(!!true); // !! shows the actual truthiness

console.log(0, !!0);
console.log('""', !!"");
console.log("null", !!null);
console.log("undefined", !!undefined);
console.log("NaN", !!NaN);
console.log("0n", !!0n);

// BigInt `999999999999999999999999999999999999n`
// For very large numbers (JS integers are accurate up to 15 digits)
let bigNum = 999999999999999999999999999999999999n;
let bigNumTwo = BigInt(1111111111111111111111);
console.log(bigNum);
console.log(bigNumTwo);

// Symbol `Symbol()`
// Used to create unique property keys (we will not use these here)
let uniqueSymbol1 = Symbol("cat");
let uniqueSymbol2 = Symbol("cat");
console.log(uniqueSymbol1 === uniqueSymbol2);

// Undefined `undefined`
// Means something does not have a value
let a;
console.log(a);

// Null `null`
// Represents the absence of a value
console.log(null);

// Type of
let age = 200;
console.log(typeof age);

// Variables
let hungry = false;
hungry = true; // typo fixed

// Constants are for values that cannot be reassigned
const bestCat = "Rose";
// bestCat = "Tom"; // will error

// var was the old variable keyword. Avoid it due to scoping issues.

// Functions
// Function keyword
function foo(num1, num2) {
  return num1 + num2;
}
console.log(foo(1, 2));

// Function expressions (often assigned to const)
const boo = function () {
  return "boo";
};

// Arrow functions
const goo = () => {
  return "goo";
};

// Single-line arrow function with implicit return
const favFood = (food) => `I love ${food}`;
console.log(favFood("cookies"));

// Hoisting
wow();
function wow() {
  console.log("Wow, I can be called before I'm defined!");
}

// Your turn: Write a function that converts human years to dog years
// dog years are 7 for every 1 human year

// Conditions
let weather = "Sunny";

if (weather === "Sunny") {
  console.log("Wear shorts");
} else if (weather === "Rainy") {
  console.log("Get an umbrella");
} else {
  console.log("Wear long pants or a skirt");
}

// Your Turn: Write a function that determines if a number is odd or even
// It should take a number as a parameter and return "ODD" or "EVEN"

// Logical operators
// && (and), || (or), ! (not)
console.log(1 == "1"); // loose equality
console.log(1 === "1"); // strict equality

let home = "Seattle";
if (weather === "Sunny") {
  console.log("Wear shorts");
} else if (weather === "Rainy" && home !== "Seattle") {
  console.log("Get an umbrella");
} else if (weather === "Rainy" && home === "Seattle") {
  console.log(
    "Don't get an umbrella despite it raining, I don't know why we are like this. I own three and never use them."
  );
} else {
  console.log("Wear long pants or a skirt");
}

// Switch statements
function energyCheck(energyLevel) {
  switch (energyLevel) {
    case "High":
      return "Run off some energy";
    case "Mid":
      return "Do nothing";
    case "Low":
      return "Get caffeine";
    default:
      return "Take a nap";
  }
}
console.log(energyCheck("Low"));

// Putting it all together
// Tip calculator
function gratuityCalculator(total, numberOfPatrons) {
  let tip = 0;

  if (numberOfPatrons === 2) {
    tip = total * 0.15;
  } else if (numberOfPatrons > 2 && numberOfPatrons < 6) {
    tip = total * 0.2;
  } else if (numberOfPatrons >= 6) {
    tip = total * 0.3;
  } else {
    tip = total * 0.1;
  }

  return total + tip;
}

console.log(gratuityCalculator(50, 4)); // Example output
//Methods
//String
//Specific characters can be accesed by index
console.log("cat"[0]);
console.log("cat"[1]);
console.log("cat"[2]);
let cat = "rose";
console.log(cat.length);
console.log(cat.includes("os"));
console.log(cat.includes("zzz"));
console.log(cat.startsWith("r"));
console.log("A long string".substring(2, 6));
console.log(" rose ".trim());
console.log("I don't like cats".replace("don't", "do"));

// Numbers
// Math
// Math is what's called an object.
// Class objects work like they do in Java, where we can call methods on them.
// We aren't going to get into JavaScript OOP in this class (it's a little strange between the keyword 'class' and how prototypes work).
// But you will sometimes encounter class objects like Math that include helpful built-in methods.

console.log(Math.random()); // Returns a random decimal between 0 and 1
console.log(Math.floor(10.005)); // Rounds down to 10
console.log(Math.floor(Math.random() * 100) + 1); // Random whole number between 1 and 100
console.log(Math.ceil(10.4)); // Rounds up to 11
console.log(Math.abs(-99)); // Returns the absolute value: 99
console.log(Math.sqrt(25)); // Returns the square root: 5

// NaN (Not a Number)
// NaN appears when an operation tries to use a non-numeric value in a numeric way
console.log(0 / 0); // NaN
console.log("hello" * 3); // NaN
console.log(parseInt("cat")); // NaN

//Your Turn:
// Write a function that simulates rolling a dice.
// The function should take the number of sides as a parameter and return a random number between 1 and that number.

//Werid JS behavor
console.log(typeof NaN);
console.log(NaN === NaN);

console.log(1 + "2"); //Converts to string
console.log("100" - 25); // Converts to number

console.log(typeof null);

//Scope
let speedLimit = 60; //global

function checkSpeed(currentSpeed) {
  let warning; // local to this function

  if (currentSpeed > speedLimit) {
    warning = "Slow down!"; //local to this block
  } else {
    warning = "You’re within the limit.";
  }

  console.log(warning);
}

checkSpeed(72);
console.log(speedLimit);
console.log(warning); // Errors

//Werid thing with var
// let speedLimit = 60; //global

// function checkSpeed(currentSpeed) {

//   if (currentSpeed > speedLimit) {
//     var warning = "Slow down!"; //local to this block
//   } else {
//     var warning = "You’re within the limit.";
//   }
//   //This shouldn't work logically but it does.
//   console.log(warning);
// }
