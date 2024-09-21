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

// console.log(typeof booleanIsLoggedIn); 
// console.log(booleanIsLoggedIn);

//0 => false; 1 => true;
//"" => false
//"Sami" => true

let someNumber = "";
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************************************** Operations **************************************

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " Sami";
let str3 = str1 + str2;
// console.log(str3);


console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

console.log(num1);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);