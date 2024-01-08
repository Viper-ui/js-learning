const descripter= Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
//similarly we can also make our own property which we want should never be changed or changeable

//In the below way we cannot change the value of Math.PI
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name:"ginger chai",
    price: 250,
    isAvailable:true,

    orderChai:function(){
        console.log(`chai nahi bani qki code fatega`);
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`); //chai is not iterable as it  object so we use Object.entries
}
}