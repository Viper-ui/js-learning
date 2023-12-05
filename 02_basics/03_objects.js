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
