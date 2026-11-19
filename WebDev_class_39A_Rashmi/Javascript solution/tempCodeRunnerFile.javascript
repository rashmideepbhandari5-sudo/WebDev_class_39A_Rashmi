// Task: Given three numbers a, b, and c, find and log the largest one without using Math.max().


let a = 15;
let b = 42;
let c = 27;

if (a >= b && a >= c) {
  console.log("Largest number: " + a);
} else if (b >= a && b >= c) {
  console.log("Largest number: " + b);
} else {
  console.log("Largest number: " + c);
}