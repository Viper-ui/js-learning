// let score = "33"

// console.log(typeof score);
// console.log(typeof(score)); // method 

// let valueInnumber = Number(score)
// console.log(typeof valueInnumber);

//if score ="33abc" then valueInnumber result would be NaN

/*let score = null
console.log(valueInnumber); ---> 0

let score = true
console.log(valueInnumber); ----> 1

"33"=> 33
"33abc" 
*/

// let isLoggedIn =1 

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); 
//it gives true but if we keep isloggedIn = "" it will give false.
//"hitesh" -->true // 0 --> false

// let someNumber = 42

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************** operations ****************************************//

let value = 3
let negvalue = -value;
//console.log(negvalue); --> -3

let str1 = "hello"
let str2 = " aayush"

let str3= str1 + str2
//console.log(str3);

//------refer to toprimitive 7.1.1 guidelines of ecma in tc39.es------------------
// console.log("1"+2); -->12
// console.log(1 + "2");---> 12
// console.log("1" + 2 + 2); --> 122

// console.log(1 + 2 + '2'); --> 32
// console.log("3"+'23');--> 323

// console.log(true);-->true
// console.log(+true);-->1
// console.log(+"");-->0
// console.log(true+); --->error

let num1,num2,num3

num1=num2=num3 = 2+2

let gameCounter =100
 // gameCounter++; --->101 postfix see prefix and postfix js mdn
 // ++gameCounter; --->101 prefix
console.log(gameCounter);