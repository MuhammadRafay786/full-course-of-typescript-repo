//varibles 
// there are three type of varible
// let
// const
// var
// syntax to declaer varible
let name : String = "rafay";
console.log(name);
// scope of varible
// let:block scope
// const:block scope
// var:function scope
// const:syntax
const username:string="rafay";
console.log(username);
// error
const username1:string="rafay";
// username1 = "zeeshan"
console.log(username);
// here error becouse const run only constatnt or fix value
// let and var syntax
export var func =():void=> {
   if (true) {
     let username:string ="rafay"
     username = "zeeshan"
console.log(username);
   }
//    here we mak let syntax
}
// error
export const func1 =():void=> {
    if (true) {
      let username:string ="saeed"
      username = "zeeshan"

    }
    console.log(username);
//  her error becouse we notlet varible out of its block but
//  if her is var its run becouse its scope is function let not run becouse its scope is block.
 }
 func()
 func1()