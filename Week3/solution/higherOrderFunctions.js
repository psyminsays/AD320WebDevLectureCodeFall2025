//If we need higher order function review.
//A higher order function is a function that takes another funciton as an argument
// and/or returns a function

const isLongTitle = (title) => {
  if (title.length < 20) {
    return false;
  }
  return true;
};
const containsSubstring = (text, substring) => {
  let upperText = text.toUpperCase();
  let upperSubstring = substring.toUpperCase();
  if (!upperText.includes(upperSubstring)) {
    return false;
  } else {
    return true;
  }
};

function loopAndFilter(arr, foo) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (foo(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const books = [
  "The Broken Earth Trilogy",
  "The Raven Tower",
  "Ancillary Justice",
  "Babel",
  "Moon of the Crusted Snow",
  "The Poppy War",
  "What Moves the Dead",
  "Priory of the Orange Tree",
  "Dungeon Crawler Carl",
  "The Southern Reach Trilogy",
];
console.log(loopAndFilter(books, isLongTitle));
console.log(loopAndFilter(books, (e) => containsSubstring(e, "p")));

console.log(
  books.filter((title) => title.toUpperCase().includes("p".toUpperCase()))
);

books.forEach(console.log);
