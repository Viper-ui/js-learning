class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`;
    }

    // now we dont want to give the methods access to every object that has been instantiated from this class so for that we will use static.
}

const aayush = new User("aayush")

//console.log(aayush.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const Iphone = new Teacher("iphone","i@phone.com")
Iphone.logMe();
console.log(Iphone.createId());// this will also give erro as it is static and child will also not be able to acces the parent static function