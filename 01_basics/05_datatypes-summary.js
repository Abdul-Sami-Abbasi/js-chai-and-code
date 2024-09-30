/*
    # Primitives (Call by Value)
    7 types: Number, String, boolean, undefined, null, Symbol, BigInt 
 */
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false

const bigNumber = 23256325478596563n;



/* 
    Non-Primitives (Call by Reference)
    3 types: Array, Objects, Functions
*/

const heros = ["shaktiman", "nagraaj", "doga"];

let myObj = {
    name:"Sami",
    age:22,
}

const myFuction = function(){
    console.log("Hello World");
}

console.log(typeof id);

// ********************************************(Heap and Stack) Memory *****************************************************

//stack(Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom";
let anothername = myYoutubeName;

console.log(anothername);

let userOne = {
    email: "user@google.com",
    hbl: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "abdulsami@google.com";

console.log(userOne.email); //abdulsami@google.com
console.log(userTwo.email); //abdulsami@google.com