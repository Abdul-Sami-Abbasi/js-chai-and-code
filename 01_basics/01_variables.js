const accountId = 1012; //in const you must initialise and declear together //they aren't changable
let accountEmail = "abdulsami123@gmail.com"; //changeable
var accountPassword = 12345; //changeable
accountCity = "Karachi"; //changeable
let accountState;

accountEmail ="abdulwahab123@gmail.com"
accountPassword = 443443;
accountCity = "Lahore";

/*
 dont use var, always use let b/c var has some issues with block scope and functional scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);