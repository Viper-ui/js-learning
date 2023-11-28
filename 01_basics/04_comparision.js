// console.log(2>1);

// console.log("2">1); -- true
// console.log("02">1); -- true

/*
console.log(null>0); -- false
console.log(null==0);-- false
console.log(null>=0); -- true

Reason--> equality check == and comparisons >< >= <= works differently.
comparisons convert null to a number, treating it as 0.
that's why the above result is true .

for undefined all are false .

== checks the value 
=== strictly checks the value and also its datatype

console.log("2" === 2); ---> false

we should avoid this type of conversion to keep the code clean and easily readable.

*/