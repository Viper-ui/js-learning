//Immediately Invoked Function Expressions(IIFE)

//function that executes immediately
// to prevent pollution from global variable scope and to immediately access database as soonas the code starts

function chai(){
    console.log("db connected");
}
 chai();

//the above function and execution call can also be written as
(function chai(){
    //named IIFE
    console.log("db connected");
})();

//()() //one for func definantion and other for execution call

( ()=>{
    console.log("db 2 connected");
})();

//unnamed IIFE
( (name)=>{
    console.log(`db 3 connected by ${name}`);
})('aayush')