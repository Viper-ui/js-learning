let score = "33"

console.log(typeof score);
console.log(typeof(score)); // method 

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

let isLoggedIn =1 

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 
//it gives true but if we keep isloggedIn = "" it will give false.
//"hitesh" -->true // 0 --> false

let someNumber = 42

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);