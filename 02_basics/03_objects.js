// singleton (when made from constructors) and not from literals.

//object literals

const mySym = Symbol("key1") //now how to access it from obj

const JsUser = {
    name : "Aayush",
    "full name": "Aayush Kumar",
    [mySym]:"myKey1", //way to access symbol in object
    age : "18",
    location :"jaipur",
    email: "aayush@google.com",
    isLoggenIn: false,
    lastLoginDays:["Monday","Saturday"]
}

//ways to access 
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // this can be access only in this way.  "full name": "Aayush Kumar",
console.log(JsUser[mySym]); //myKey1

JsUser.email="aayush@gpt.com" // can override the value like this
// Object.freeze(JsUser) // to not let anychanges to be made in the object

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user ,${this.name}`);
}


console.log(JsUser.greeting);// [Function (anonymous)] // reference of function
console.log(JsUser.greeting());// executes the function.
console.log(JsUser.greetingTwo());// executes the function.



