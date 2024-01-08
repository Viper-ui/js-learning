const User ={
    _email:'aayush@g.com',
    _password:'123334',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value;
    }
}

//here Object.create is a factory function as our contructor function new
const tea = Object.create(User)
console.log(tea.email);