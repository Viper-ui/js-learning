function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}

/*
sayMyName //just reference of function
sayMyName()// execution of func

*/

// number1 & number2 are parameters
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers() // NaN
// addTwoNumbers(3,4) // 7  //arguments passed
// addTwoNumbers(3,"4") //34 //js assumes 3 is also a string and adds it
// addTwoNumbers(3,"a")// 3a
// addTwoNumbers(3,null)// 3

// const result = addTwoNumbers(3,5);
// console.log( result);// undefined

function addTwoNumbers(number1,number2){
        
    // let result = number1+number2
    // return result;
    // console.log("aayush") // this will never execute as after the return statement function doen't executes anything.
     return number1+number2;
    }
    
    const result = addTwoNumbers(3,5);
    // console.log("Result: ",result); //Result:  8

    function loginUserMessage(username) {
        if(!username){
            console.log("please enter a username");
            return
        }
         return `${username} just logged In` // this will not be executed if we enter the if block as return statement is present there and then this line will give undefined.
    }

    // console.log(loginUserMessage("Aayush")) //Aayush just logged In
    // console.log(loginUserMessage()) //Undefined just logged In

    //------shopping cart----------
    //rest operator used to collect many no of parameters
    function calculateCartPrice(...num1) {
        return num1;
    }

   // console.log(calculateCartPrice(200,300,400));//[ 200, 300, 400 ]

   const user={ 
        username:"aayush",
        age:12
   }

   //how to access object in function

   function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
   }
// handleObject(user);

handleObject({
    username:"rups",
    age:10
})

const myarr =[ 200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myarr)); //400




