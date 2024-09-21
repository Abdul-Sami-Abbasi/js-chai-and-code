let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// console.log(valueInNumber); //NaN


score = null;

// console.log(typeof score);
// console.log(typeof (score));

valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// console.log(valueInNumber); //0


score = undefined;

// console.log(typeof score);
// console.log(typeof (score));

valueInNumber = Number(score);

// console.log(typeof valueInNumber); 

// console.log(valueInNumber); //NaN

//"33" => 33
//"33abc" => NaN
//true = 1; false = 0;

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn); 

console.log(typeof booleanIsLoggedIn); 
console.log(booleanIsLoggedIn);

//0 => false; 1 => true;
//"" => false
//"Sami" => true

let someNumber = "";
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);