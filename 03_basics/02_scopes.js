//Global and local scope

let a =300
{} //scope if this comes with func or ifelse 
console.log(a);// 300 //global scope 
//global scope //value can be accessed everywhere
//block scope //value cannot be accessed outside block 
if(true){
    let a =10
    const b=20
    var c=30
}

// console.log(a); // as here we are accesing a outside the if scope hence it will give the error a is not defined 
// console.log(b); // same for b 
console.log(c); // 30 this is why we don't use var as it can be accesed outside the scope as well

// nested scope 

function one(){

     const username ="aayush"
    function two(){
        const website = "youtube"
        console.log(username); // aayush (as accesed using global variable)
    }
    // console.log(website) //website is not defined as scope issue

//    two()
}

one() // no output if two() is commented.

// 88888888888888888888888888888 INTERESTING CONCEPT ****************
// addOne(5)  this is very much possible as we can call the function for this function declaration before initialization as well

function addOne(num) {
    return num+1;
}

addOne(5)


//addTwo(5)----- for the below function if we try to access the function before initialization it will give error "cannot access add two before Initialization" because we are holding the function in a variable
const addTwo= function(num){
    return num+2;
}

addTwo(5)