function setupCounter() {
  const h1 = document.querySelector("h1");
  h1.textContent = "Counter";

  const main = document.querySelector("main");
  const h2 = document.createElement("h2");
  h2.id = "number";
  h2.textContent = "0";

  const button = document.createElement("button");
  button.textContent = "Click me!";

  main.append(h2, button);

  button.addEventListener("click", incrementCounter);
}

function incrementCounter() {
  const h2 = document.getElementById("number");
  let currentNum = parseInt(h2.textContent);
  currentNum++;
  h2.textContent = currentNum;
}

setupCounter();
