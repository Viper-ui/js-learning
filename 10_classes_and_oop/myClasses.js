// ES6 and syntactical sugar

// class User {
//     constructor(username, email,password){
//         this.username = username,
//         this.email=email,
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai);
// console.log(chai.changeUsername());

// ----------behind the scene-----------if we didnt have class

function User(username,email,password){
    this.username = username,
    this.email=email,
    this.password=password
}

User.prototype.encryptPassword= function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());