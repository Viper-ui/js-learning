class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email (){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email= value // we never return in setter we assign the value here
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        return this._password = value
    }

    //here we get a error max call stack sixe exceeded as contructor and getter/setter both are trying to set the password and there is a race between them due to which they occupy the whole call stack in js.

    //solution:
    // 1.change password field to _password in getter/setter
}

// const learnGetter = new User('geeter@gmail.com',"123");
const learnGetter = new User('geeter@gmail.com',"abc");
console.log(learnGetter.password);
console.log(learnGetter.email);

// there are some scenarios where we don't wnat to give our class properties to everyone or modify and give our class properties here is where our getters and setters com to action.For eg we dont want to give the pass access to anyone

