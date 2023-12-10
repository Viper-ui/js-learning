// for of 

//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
// }

const greetings = "Hello world"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//Maps 

//known for unique values and also hold the data in the order it is provided and in key value pair and also unique data (as if I pass India again after france it wont print france )

//maps are iterable objects are not
const map = new Map()
map.set("IN","India") //("key ","Value")
map.set("USA","United states of America")
map.set("Fr","France")

// console.log(map);

for (const key of map) {
    console.log(key); // this gives the complete value as Array 
}


for (const [key, value] of map) {
    console.log(key,':-',value); // this gives the key value separately
}

const myOject ={
    'game 1':'NFS',
    'game 2':'spiderman'
}

for (const [key,value] of myOject) {
    console.log(key,':-',value); //TypeError: myOject is not iterable #not similar to map hence we cannot iterate it this way
}