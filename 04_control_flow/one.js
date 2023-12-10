// conditional basis code flow

// const isuserloggedIn = true
// if(2!=3){
//     console.log("executed");
// }

// comparison <,>,<=,>=,==,!= ,===

// const score=200;

// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// var keyword scope is completely global so it is not used now.

const balance =1000

// if(balance>500) console.log("test"); //implicit scope for one line 

// if(balance < 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than");
// }else if(balance<900){
//     console.log("less than");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if(userLoggedIn && debitCard ){   //add && for more conditions
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged IN");
}