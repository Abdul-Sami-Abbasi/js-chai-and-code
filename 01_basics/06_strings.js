const name = "Sami";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my hithub repositories are ${repoCount}`);

const gameName = new String('Abdul sami');

// console.log(gameName); //[String: 'Abdul sami']

// console.log(gameName[0]);

console.log(gameName.__proto__); //{}

console.log(gameName.length); //10

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(2)); //d

console.log(gameName.indexOf("i")); //9

const newString = gameName.substring(0, 5); //Abdul
const newString2 = gameName.slice(-8, 5);    //dul  (in slice -ve values are allowed)

console.log(newString);
console.log(newString2);

const newString3 = "     Sami     ";

console.log(newString3);

console.log(newString3.trim()); // reim will remove extra spaces.

const url = "abdulsamiabbasi420@gmail.com";
console.log(url.replace('420','443'));

console.log(url.includes("sami")); //true

console.log(gameName.split("a"));