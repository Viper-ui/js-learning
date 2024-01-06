//---------------creating a promise--------
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve() //here it is connected to .then
    },1000)
})

//-----------consuming a promise---------------------

promiseOne.then(function(){
    console.log('promise Consumed');
})
// now the above console log is not printed as .then is still not connected to resolve while consuming the promise.
// pomise consumed will always be printed after async task is completed and when we resolve it.

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('async task two');
        resolve();
    },1000)
}).then(function(){
    console.log("async two resolved");
})

// this promises shows us how data is consumed 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        //pass the value to .then
        resolve({username:'chai',email:'chai@example.com'})
    },1000)
})

promiseThree.then(function(user){
    //how will we take the data
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        //let error =true
        let error =false
        if (!error) {
            resolve({username:"Aayush",password:"123"})
        }else{
            reject('Error')
        } 
    },1000)
})

// promise chaining 
promiseFour.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolve or rejected");
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        //let error =true
        let error = true 
        if (!error) {
            resolve({username:"Aayush",password:"123"})
        }else{
            reject('Error from promise 5')
        } 
    },1000)
});

// async await syntax

async function consumePromiseFive(){
    // remember promise is a object so never consume it like promiseFive() i.e like a function
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://api.github.com/users/Viper-ui')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }

// getAllUsers();


// network based request (fetch)
fetch('https://api.github.com/users/Viper-ui').then((response)=>{
    return response.json()
})//above we returned the response but who will handle it (so it will b handled by one more then)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})