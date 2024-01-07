function mutiplyByfive(num){
    return num*5
}

mutiplyByfive.power =2;

console.log(mutiplyByfive(5));
console.log(mutiplyByfive.power);
console.log(mutiplyByfive.prototype);

function createUser(username, score){
    this.username = username,
    this.score = score
}

// creating our own prototype

createUser.prototype.increment = function(){
    this.score++ // here if we dont give this and call the same function with two diff valur it will get confused where to increase the score so it literally means jisne bhi bulaya uska me prototype use kar 
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

// if we use new keyword then it knows the score but if we remove it it gives error.
// so the work of transfering the values from the fucntion to the keyword is done by new keyword or else we get error.
const one = new createUser('aayush','234');
const two = createUser('abhi','297'); 

one.printMe()
// two.printMe()// this will give error as we haven't use new keyword there.

