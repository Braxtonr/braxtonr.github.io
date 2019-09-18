userName = prompt("What is your name?");
numCoffee = prompt("How many coffees would you like?");
tipAmount = prompt("Tip");
let coffeeTotal = document.getElementById("coffeeTotal");
const salesTax = 0.07;
let coffeePrice = numCoffee * 2;
let totalTax = salesTax * coffeePrice;
let totalPrice = (totalTax) + (coffeePrice) + parseInt(tipAmount);

coffeeTotal.innerHTML = userName + " ordered " + numCoffee + " coffee(s). Total: $" + totalPrice.toFixed(2);