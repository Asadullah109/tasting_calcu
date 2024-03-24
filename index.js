#!/usr /bin /env/ node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
for (let i = 1; i < 4; i++) {
    const numbergen = Math.floor(Math.random() * 10);
    console.log(`Attemp #: ${i}`);
    const userguess = await inquirer_1.default.prompt({
        type: 'number',
        name: 'usernumber',
        message: 'Guess the number what I am thinking'
    });
    if (userguess.usernumber === numbergen) {
        console.log("Good job! you guess correct number");
    }
    else {
        console.log(`you loss, I thaught #${numbergen}`);
    }
}
/*let a =Math.random()





let b =a*5





let c =Math.floor(b)





let d =Math.floor(b)+1













console.log(a);





console.log(b);





console.log(c);





console.log(d);*/
