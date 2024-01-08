class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username) // this does all the work that our call and this does and brings username
        this.email= email,
        this.password= password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new teacher("chai","chai@teacher.com","567")

chai.addCourse();

const tea = new User("masalaChai")

// tea.addCourse()// error as addcourse will not be accesible to user
tea.logMe()// will execute this

console.log(chai === tea);//false
console.log(chai === teacher);//false

console.log(chai instanceof teacher);// true
console.log(chai instanceof User); // true