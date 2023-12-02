const score = 400; //simple pattern to define number.
console.log(score);

// defining new object specially
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);// toString coverts its to string and then we are able to use its properties.

console.log(balance.toFixed(2));// 100.00

const otherNumber = 23.42324324324 
console.log(otherNumber.toPrecision(3)); // 23.4

const hundres = 1000000
console.log(hundres.toLocaleString()); // --->1,000,000 --as per us standards
console.log(hundres.toLocaleString('en-IN')); // ---> 10,00,000 as per Indian standards.

// ******************Maths**************************//

console.log(Math.abs(-4)); // 4 negative changes to +ve
console.log(Math.round(4.7));
console.log(Math.ceil(4.2)); // ceiling -->5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,6,3,2)); //2 similarly we have max

// now where we gonna mostly use Math is Math.random

console.log(Math.random());// will give random values between 0 to 1 mostly decimal value.
console.log((Math.random()*10)+ 1); // no will always be more than one

// trick ------------

const min =10
const max =30

//Formula
console.log(Math.floor(Math.random() * (max- min + 1) + min));