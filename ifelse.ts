// If/Else:
let username:String="abdul rafay";
let passward:Number = 580;
if(username =="abdul rafay" && passward == 580 ) // we write here single value also.
    {
console.log("welocom back" + " " + username);

}
else
{console.log("invalid username or passward");
    }
// nested if/else
// in nested if else we us multiple conditions

let username1:String="zeeshan";
let passward1:Number = 2580;
let otp : Number =786;
if(username1 =="abdul rafay" && passward1 == 580 ) // we write here single value also.
    {
console.log("send otp");
if (otp == 786){
    console.log("welocom back" + " " + username);
}    
}
// if we add more users we use elseif conditions
else if (username1=="zeeshan" && passward1==2580) {
    console.log("send otp");
if (otp == 786){
    console.log("welocom back" + " " + username);
}   
} 
else
{console.log("invalid username or passward");
}

























