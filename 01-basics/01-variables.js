const accountId =  144553;
let accountEmail = "Deepak@email.com"
var accountPassword = "12345"
accountCity = "Bhopal"
let accountState
/*
prefer not to use var
because of issue in block  scope and functional scope
*/
accountEmail = "Deepak@1email.com"
accountPassword = "212121"
accountCity = "Bengaluru"
//accountId = 1
console.log(accountId);

console.table([accountEmail,accountPassword,accountCity])
console.log(accountState);