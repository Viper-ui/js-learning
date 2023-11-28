/*
#Primitive -- 7 types (call by value)
 string  
 number
 boolean
 null 
 undefined
 Symbol (to make a value unique it is used)
 BigInt (for very large values)

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId) --> false as both are unique which is the us of symbol.

 let a = 10;  // Number
a = "abc";   // String

In the above JavaScript code, the variable a is first assigned a number, and then it is reassigned a string. This is valid in JavaScript due to its dynamic typing

 #Reference (Non primitive) (reference)
  Array, Objects, Functions 

  const heros = ["shaktiman","nagraj","doga"]
  let myObj = {
    name: "aayush",
    age: "24",
  }
 curly braces k andar jo bhi hai vo object hai 

 const myFunction = function(){
    console.log("hello");
 }

 https://262.ecma-international.org/5.1/#sc-11.4.3

 to read the typeOf functionaity of primitive and nonprimitive dataType
 */

 /*
 --------------------memory------------------------

 Stack(primitive)---- copy of the value
 
 Heap(Non-primitive) --- In heap they get the same reference of the value
*/
 let myName = "Ak"
 let anotherName = myName
 anotherName="chai peelo friends"

 console.log(anotherName);

 let userOne  ={
    email:"user@google.com",
    upi:"user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "aayush@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);