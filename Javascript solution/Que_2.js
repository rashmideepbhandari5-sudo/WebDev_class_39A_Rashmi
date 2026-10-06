// Calculate the electricity bill according to the given unit rates using if...else if...else.
const prompt = require("prompt-sync")();
let units = Number(prompt("Enter electricity units"));
let bill;

if (units <= 50) {
    bill = units * 5;
}
else if (units <= 100) {
    bill = units * 7;
}
else if (units <= 200) {
    bill = units * 10;
}
else {
    bill = units * 12;
}

console.log("Electricity Bill = Rs.", bill);