let prompt = require("prompt-sync")()
let n:number=parseInt(prompt('pelease enter row no.'));
let a:string="";
for (let i:number =1; i<=n; i++) {

    for (let j:number =1; j<=i; j++){
        a+="*"
    }
    a+="\n"
}
console.log(a);
export{};