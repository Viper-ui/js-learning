const score = 400; //simple pattern to define number.
console.log(score);

// defining new object specially
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);// toString coverts its to string and then we are able to use its properties.

console.log(balance.toFixed(2));

const otherNumber = 23.42324324324
console.log(otherNumber.toPrecision(3));

const hundres = 1000000
console.log(hundres.toLocaleString()); // --->1,000,000 --as per us standards
console.log(hundres.toLocaleString('en-IN')); // ---> 10,00,000 as per Indian standards.

// ******************Maths**************************//

