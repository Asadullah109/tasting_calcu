#!/usr /bin /env/ node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
for (var i = 1; i < 4; i++) {
    var numbergen = Math.floor(Math.random() * 10);
    console.log("Attemp #: ".concat(i));
    var userguess = await inquirer_1.default.prompt({
        type: 'number',
        name: 'usernumber',
        message: 'Guess the number what I am thinking'
    });
    if (userguess.usernumber === numbergen) {
        console.log("Good job! you guess correct number");
    }
    else {
        console.log("you loss, I thaught #".concat(numbergen));
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
