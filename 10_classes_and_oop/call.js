function setUserName(username){
    this.username= username
}

// call passes the current execution context to other function---------

function createUser(username,email,password){
    //setUserName(username) // by this we willnot be able to access the username in the below console log because here we are just giving the reference technically so we use
    setUserName.call(this, username) // but still we have to use this when we use call to give the current context.
    this.email=email,
    this.password= password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);