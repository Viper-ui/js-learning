//values in the array are object literal valueand user is the object literal
const user = {
    username:"aayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username:${username}`); // here we get undefined as it will not get the user name in its current context of the fucntion scope so this is were we use this
       // console.log(`Username:${this.username}`);
       //console.log(this); // this gives us the complete details of object
    }

}
// console.log(this); // {}
// console.log(user.username);
// console.log(user.getUserDetails());

//const promiseOne = new Promise()
// new keyword is actually a contructor function

function User(username,loginCount,isLoggedIn){
    this.username = username; // so here the left side one is the variable with which this is used and right one is the value passed in the function
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = User("aayush",12,true)

const userTwo = new User("a2",34,false) // this overrides all the value from previous function this is why we use new keyword (which gives us a newinstance )

console.log(userOne);
console.log(userTwo);

// so constructor function always gives us a new instance
//---------------what happens on new keyword creation i.e(constructor function)
// step 1 : new empty object created also called instance
// step 2: constructor function called (which packs all the arg and gives it rto us)
// step 3: this keyword gets injected 
// step 4: we get the values in the function.