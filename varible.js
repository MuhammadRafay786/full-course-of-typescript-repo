"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func1 = exports.func = void 0;
//varibles 
// there are three type of varible
// let
// const
// var
// syntax to declaer varible
let name = "rafay";
console.log(name);
// scope of varible
// let:block scope
// const:block scope
// var:function scope
// const:syntax
const username = "rafay";
console.log(username);
// error
const username1 = "rafay";
// username1 = "zeeshan"
console.log(username);
// here error becouse const run only constatnt or fix value
// let and var syntax
var func = () => {
    if (true) {
        let username = "rafay";
        username = "zeeshan";
        console.log(username);
    }
    //    here we mak let syntax
};
exports.func = func;
// error
const func1 = () => {
    if (true) {
        let username = "saeed";
        username = "zeeshan";
    }
    console.log(username);
    //  her error becouse we notlet varible out of its block but
    //  if her is var its run becouse its scope is function let not run becouse its scope is block.
};
exports.func1 = func1;
(0, exports.func)();
(0, exports.func1)();
