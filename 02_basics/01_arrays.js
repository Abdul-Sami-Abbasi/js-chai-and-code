//arrays

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["Shaktimaan", "Nagraaj"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Array methods

myArr.push(6); // push will add elements in last of an array.

myArr.push(7);

// console.log(myArr);
myArr.pop(); // pop will remove last element of an array.
// console.log(myArr);

myArr.unshift(52); // unshift(52) will add 52 in the starting of an array.
myArr.shift();  // shift() will remove first element at the starting of an array.
// console.log(myArr);

// console.log(myArr.includes(9)); //includes(9) will check whether the array has an element whose value is 9, and prints true or false.

// console.log(myArr.indexOf(15)); //prints the index of the element, (if the element is not at the array it will print -1.) 

const newArr = myArr.join(); // join() will join all the elements of an array and make a string.

// console.log(newArr);

//slice and splice

console.log(" A", myArr);

const myNewArr1 = myArr.slice(1, 3);

console.log(myNewArr1);

console.log(" B", myArr);

const myNewArr2 = myArr.splice(1, 3);
console.log(myNewArr2);
console.log(" c", myArr);
