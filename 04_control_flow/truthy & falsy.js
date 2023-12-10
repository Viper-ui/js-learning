const userEmail =[]

if(userEmail){
    console.log("Got user email"); //how id this got executed without specifing in the condition its because truthy amd falsy concept
}else{
    console.log("don't have");
}

//falsy values: false, 0, -0, BigInt 0n, null, undefined,NaN

//truthy values: "0",'false',"--space in string ",[],{},function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj ={}

if(Object.keys(emptyObj).length ===0){
    console.log("object is empty");
}

// -----------------just to remember------------------

// false ==0 --> true , false==''--> true, 0==''-->true

//Nullish coalescing Operator(??):null defined

let val1;
// val1 =5??10;
//val1 = null??10; // safety check for null if not null give other 

//val1 = undefined??15 // 15 // safety check for undefined as well

val1 = null ?? 10  ?? 20  // 10 --- will take the first value after null
console.log(val1); //5 

//Ternary operator
//condition ? true:false

const iceTeaPrice =100

iceTeaPrice<=80? console.log("less than 80"):console.log("more than 80")