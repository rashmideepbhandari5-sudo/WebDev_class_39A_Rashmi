// Write a JavaScript program that takes a number and calculates its square and cube.
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number"));

let square = num * num;
let cube = num * num * num;

console.log("Square =", square);
console.log("Cube =", cube);