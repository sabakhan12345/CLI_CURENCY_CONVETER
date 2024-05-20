#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const currency:any = {
    USD: 1, // sea currency
    EUR: 0.91,
    GRP: 0.78,
    INR: 74.57,
    PKR: 280,
    DIN: 40
};
let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message:'ENTER FROM CURRENCY',
            type:'list',
            choices:['USD','EUR','GRP','INR','PKR','DIN']
        },
        {
            name: 'to',
            message:'ENTER TO CURRENCY',
            type:'list',
            choices:['USD','EUR','GRP','INR','PKR','DIN']
        },
        {
            name: 'amount',
            message:'ENTER YOUR AMOUNT',
            type:'number'
        
        }
    ]
);
//console.log(user_answer);

let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to];   // exchange rate
let amount = user_answer.amount;
let baseAmount = amount/fromAmount;    // usd base currency
            //     15000/280
let convertedAmount = baseAmount *toAmount;
console.log(chalk.blue.bold(` YOUR AMOUNT CONVERTED:  ${fromAmount} to ${toAmount} is =  ${convertedAmount}`));


// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);


