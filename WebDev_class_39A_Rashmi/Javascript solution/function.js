// Question 1:----------------------------

const calculateBill = (units) => {
  let bill = 0;
  if (units <= 20) {
    bill = units * 5;
  } else if (units <= 50) {
    bill = 20 * 5 + (units - 20) * 7;
  } else {
    bill = 20 * 5 + 30 * 7 + (units - 50) * 10;
  }
  return bill + 50;
};
const displayBill = (name, units, callback) => {
  const total = callback(units);
  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${total}`);
};

displayBill("Ram", 65, calculateBill);


// Question 2:-----------------------------------------

const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

const processResult = (name, m1, m2, m3, callback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = callback(average);
  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};

processResult("Sita", 80, 75, 70, getDivision);

// Question 3: ---------------------------------------------------
const calculateDiscount = (amount) => {
  if (amount >= 5000) return 20;
  if (amount >= 3000) return 15;
  if (amount >= 1000) return 10;
  return 0;
};

const calculateFinalPrice = (amount, discount) =>
  amount - (amount * discount) / 100;
const checkout = (customerName, amount, callback) => {
  const discount = calculateDiscount(amount);
  const finalPrice = callback(amount, discount);
  console.log(`Customer: ${customerName}`);
  console.log(`Original Price: Rs. ${amount}`);
  console.log(`Discount: ${discount}%`);
  console.log(`Final Price: Rs. ${finalPrice}`);
};
checkout("Nikesh", 6000, calculateFinalPrice);

// Question 4: -----------------------------------------

const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const calculateTotal = (price, quantity) => price * quantity;

const applyDiscount = (total, quantity) =>
  quantity >= 5 ? total * 0.1 : 0;

const bookTicket = (name, age, quantity, callback) => {
  const price = getTicketPrice(age);
  const total = callback(price, quantity);
  const discount = applyDiscount(total, quantity);
  const finalAmount = total - discount;

  console.log(`Customer: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${total}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

bookTicket("Hari", 25, 5, calculateTotal);

// Question 5: ----------------------------------

const calculateBonus = (salary) =>
  salary >= 40000 ? salary * 0.1 : salary * 0.05;

const calculateTax = (salary) => salary * 0.05;

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  return salary + bonus - tax;
};
const generatePayslip = (name, salary, callback) => {
  const bonus = calculateBonus(salary);
  const tax = calculateTax(salary);
  const net = callback(salary, calculateBonus, calculateTax);

  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${net}`);
};

generatePayslip("Ram", 50000, calculateNetSalary);


// Question 6:-----------------------------------
const calculateDelivery = (distance) => {
  if (distance <= 2) return 30;
  return 30 + (distance - 2) * 15;
};

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

const processOrder = (customer, distance, orderAmount, callback) => {
  let charge;
  if (checkFreeDelivery(orderAmount)) {
    charge = 0;
  } else {
    charge = callback(distance);
  }

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${charge}`);
};

processOrder("Shyam", 5, 800, calculateDelivery);
processOrder("Gita", 5, 1200, calculateDelivery);


// Question 7: -----------------------------

const FEE = 25;
const validateWithdrawal = (amount, balance) => {
  if (amount <= 0) return "Invalid amount.";
  if (amount % 500 !== 0) return "Amount must be a multiple of 500.";
  if (amount + FEE > balance) return "Insufficient balance.";
  return true;
};

const withdrawMoney = (amount, balance, callback) => {
  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);

  const result = callback(amount, balance);

  if (result === true) {
    balance = balance - amount - FEE;
    console.log("Withdrawal Successful!");
    console.log(`Transaction Fee: Rs. ${FEE}`);
  } else {
    console.log(`Withdrawal Failed: ${result}`);
  }

  console.log(`Remaining Balance: Rs. ${balance}`);
  return balance;
};

withdrawMoney(3000, 10000, validateWithdrawal);
console.log("");
withdrawMoney(700, 10000, validateWithdrawal);
console.log("");
withdrawMoney(20000, 10000, validateWithdrawal);


// Question 8: -----------------------------------

const getFoodPrice = (foodName) => {
  const menu = {
    burger: 250,
    pizza: 500,
    momo: 150,
    chowmein: 180,
  };
  const price = menu[foodName.toLowerCase()];
  return price === undefined ? null : price;
};

const calculateServiceCharge = (total) => total * 0.05;
const calculateOrder = (foodName, quantity, callback) => {
  const price = callback(foodName);
  if (price === null) return null;
  return price * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = callback(foodName, quantity, getFoodPrice);

  if (foodAmount === null) {
    console.log(`Sorry ${customerName}, "${foodName}" is not on the menu.`);
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);
generateReceipt("Suman", "Sushi", 1, calculateOrder);


// Question 9: ----------------------------------
const calculateBonusAmount = (amount) => {
  if (amount >= 1000) return amount * 0.15;
  if (amount >= 500) return amount * 0.10;
  if (amount >= 100) return amount * 0.05;
  return 0;
};

const calculateTotalBalance = (amount, bonus) => amount + bonus;
const recharge = (number, amount, callback) => {
  const bonus = calculateBonusAmount(amount);
  const total = callback(amount, bonus);

  console.log(`Mobile Number: ${number}`);
  console.log(`Recharge Amount: Rs. ${amount}`);
  console.log(`Bonus Received: Rs. ${bonus}`);
  console.log(`Total Balance: Rs. ${total}`);
};

recharge("9800000000", 1000, calculateTotalBalance);

// Question 10: --------------------------------
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return "Error: Cannot divide by zero";
  return a / b;
};

const calculate = (a, b, operationCallback) => operationCallback(a, b);
console.log(`Addition: 20 + 10 = ${calculate(20, 10, add)}`);
console.log(`Subtraction: 20 - 10 = ${calculate(20, 10, subtract)}`);
console.log(`Multiplication: 20 * 10 = ${calculate(20, 10, multiply)}`);
console.log(`Division: 20 / 10 = ${calculate(20, 10, divide)}`);
console.log(`Division: 20 / 0 = ${calculate(20, 0, divide)}`);
