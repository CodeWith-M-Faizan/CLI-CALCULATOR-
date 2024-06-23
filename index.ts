#! usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter your first number", type: "number", name: "firstnumber" },
  { message: "enter your second number", type: "number", name: "secondnumber" },
  {
    message: "select  one of your operators to perform your operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// CONDITIONAL STATEMENT
if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else console.log("choose valid operator to perform operations");
