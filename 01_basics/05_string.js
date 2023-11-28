const name ="aayush"

const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('aayush-123') 


console.log(gameName[0]);
console.log(gameName.__proto__);// get prototype object of console

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,7)
console.log(newString);
//substing will not obey negative value and it will start from 0 if negative value is passed

const anotherString = gameName.slice(-8,3)
console.log(anotherString); 
// its output will be y as strLength - begin Index is reated as 10 - 8 i.e 2 so from 2 to 3(endIndex) it os only y.

const newStringOne = "     aayush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://aayush.com/aayush%20kumar"

console.log(url.replace('%20','-'));
console.log(url.includes('aayush'));

//convert string to array

console.log(gameName.split());
console.log(gameName.split('-')); //split on basis of - 



