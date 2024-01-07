let myname = "aayush     "

// console.log(myname.length);

//now lets create a new method true length as we dont have one and also we don't want to use trim and all function to trim the spaces and all.

let myHeroes=["thor","spiderman"]


let heroPower={
    thor:"hammmer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`sipdey power is${this.spiderman}`);
    }

}

Object.prototype.aayush=function(){
    console.log(`aayush is present in all objects`);
}
// but if we add the prototype to array then it is not accesible to array but if we give the prototype power to object so it is accesible by all because everything is a object in JS .

//heroPower.aayush()
myHeroes.aayush()

//--------------------inheritance----------------

const User={
    name:"chai",
    email:"chai@google.com"
}
const teacher={
    makeVideos: true
}

const TeachingSupports = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupports // accessing the properties of teachingSupports through inheritance
}


// outdaTed approach
teacher.__proto__ = User //here teacher can acces all the properties of User this is what prototypal inheritance is 

Object.setPrototypeOf(teacher,User) // modern Way syntax

//modern syntax
Object.setPrototypeOf(TeachingSupports,teacher) // lets teaching support to access all the properties of teacher

let anotherUserName ="Chai     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // since here we have the reference of another userName function in this so we can access the truelength function directly through string as well
    console.log(`True length is: ${this.trim().length}`);
}

 anotherUserName.trueLength();
 myname.trueLength();

"jamanamar denga".trueLength();