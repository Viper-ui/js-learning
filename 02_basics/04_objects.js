//singleton 

//const tinderUser = new Object() object can be declared in this way as well

const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn =false

console.log(tinderUser);//{}

//objects in objects

const regUser ={
    email:"sam@g.com",
    fullname:{
        userFullname:{
            firstname:"Aayush",
            lastname:"kumar"
        }
    }
}

console.log(regUser.fullname.userFullname.firstname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = {obj1,obj2} //this gives object inside object 
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4= Object.assign(obj1,obj2) // gives one complete array
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// //note here now the obj1 === obj4 as obj1 will also have the same value

const obj3 = {...obj1,...obj2}
console.log(obj3);   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// when values come from Database
const users = [
    {
        id:1,
        email:"a@g.com"
    },
    {
        id:2,
        email:"a@g.com"
    }
]

users[1].email

console.log(Object.keys(tinderUser)); //returns an array of keys[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // returns an array of value

console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

//Destructuring of objects

const course ={
    coursename:"a",
    courseprice:"999",
    courseInstructor:"Aayush"
}

// to extract values or destructure of obj
const {courseInstructor} = course 
console.log(courseInstructor);

// (syntax info) json object have their key also in doublequotes



