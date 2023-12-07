//this keyword refers t the current context

const user={
    username:"aayush",
    proce:999,

    welcomemessage: function () {
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }

}

// user.welcomemessage() //aayush,welcome to website
// user.username = "sam" //here we are changing the context so 
// user.welcomemessage() //sam,welcome to website

// console.log(this) //{} in node env this refer to emplty object but in browser we see window.

// function one() {
//     let username ="aayush"
//     console.log(this.username); //undefined / as we can only use this context in objects only and not in functions
// }

// one()

// const chai =  ()=> {
//     let username="aayush"
//     console.log(this.username); //undefined
//     console.log(this); //{}
// }

// chai()

/* basic arrow function example

const addtwo = (num1,num2)=>{
    return num1+num2
}

console.log(addtwo(3,4));
*/

// const addtwo = (num1,num2)=>  num1+num2 //implicit return way for one line statement or 
// const addtwo = (num1,num2)=>  (num1+num2) curly braces me rap kara toh return likhna hi padega but paranthesis me rap kara to return nhi likhna padega.

const addtwo = (num1,num2)=>  ({username:"aayush"}) // if we use object we have to use ()
console.log(addtwo()); // { username: 'aayush' }

const myarr =[2,3,4,5]

// myarr.forEach(()=>{}) myarr.forEach(()=>())
