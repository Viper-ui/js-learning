// array
//collection of multiple items in a single variable
//resizeable, mix of datatypes, cannot be accessesed using arbitary strings.

const myArr =[0,1,2,3,4,5] 
const myHeroes = ["shaktiman","nagarahj"]
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[3]); // -- 3

// Array methods 

myArr.push(6)
myArr.pop() // --removes the last value from array.

myArr.unshift(9);// add the no to start of the array and it shifts the complete array position 
myArr.shift() //no parameter --removes array from start

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join()
console.log(myArr); 
console.log(newArr); //same value but different type as now it is a comma seperated string.

// slice , splice 

console.log("A",myArr);

const myn1 = myArr.slice(1,3); // 0,1,2,3,4,5
console.log(myn1); // [1,2] starting from 1 but not including 3(doesn't manipulate thr org array)

console.log("B",myArr); //same as A

const myn2 = myArr.splice(1,3) // manipulates the original array as the splice part will now be removed from the original array and also includes the last range in output.
console.log("c",myArr);// [0,4,5]
console.log(myn2); //[1,2,3] 
