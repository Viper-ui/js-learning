const marvel_heroes =["thor","ironMan","spiderman"]
const dc_heroes =["superman","flash","batman"]

 //marvel_heroes.push(dc_heroes)//[ 'thor', 'ironMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ] Array takes all data so took dc_heroes as the 4th data.
//console.log(marvel_heroes);

//const all_heroes = marvel_heroes.concat(dc_heroes) // returns new array [ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heroes);

const allNewHeroes = [...marvel_heroes, ...dc_heroes] //spread operator spreads the complete value and forms a new array [ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allNewHeroes);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let real_another_array = anotherArr.flat(Infinity) /*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/
console.log(real_another_array);

console.log(Array.isArray("aayush")); //false
console.log(Array.from("aayush")); //[ 'a', 'a', 'y', 'u', 's', 'h' ]
console.log(Array.from({name:"aayush"})); //[] returns empty array as it doesn't know from what value should it make the make either key or value?

let s1=100;
let s2=200;
let s3=300;

console.log(Array.of(s1,s2,s3)); //[ 100, 200, 300 ] similar to Array.from




