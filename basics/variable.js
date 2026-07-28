const accountId = 12345
let accountEmail = "test@gmail.com"
var accountPass = "12345"
accountCity = "Nagpur"
let accountState;// print undefine value 


//accountId = 54252 it is not allow to change the value of constant
accountEmail = "bhushan@gmail.com"
accountPass = "98986"
accountCity = "amravati"

console.log(accountId); // for print single value 
console.table([accountId,accountEmail,accountPass,accountCity,accountState]) //for more than 1 value 

//note: 
 /* 
 Prefer not to use var 
 because of issue in block scope and functional scope
 */ 