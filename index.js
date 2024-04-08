#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("\n\tWelcome to Muhammad Waqas Currency Convertor\n"));
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: 'list',
        message: "please select your currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Please select your currency you want to exchange",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(chalk.yellow("Your converted Amount is:" + (convertedAmount.toFixed(2))));
