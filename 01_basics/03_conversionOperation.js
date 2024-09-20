let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber); //NaN


score = null;

console.log(typeof score);
console.log(typeof (score));

valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber); //0


score = undefined;

console.log(typeof score);
console.log(typeof (score));

valueInNumber = Number(score);

console.log(typeof valueInNumber); 

console.log(valueInNumber); //NaN