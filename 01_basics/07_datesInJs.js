// check mdn for more info on date object.

let myDate = new Date()

console.log(myDate); // 2023-12-02T12:26:06.516Z
console.log(myDate.toString()); // Sat Dec 02 2023 12:27:02 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); //Sat Dec 02 2023
console.log(myDate.toISOString()); // 2023-12-02T12:29:53.949Z
console.log(myDate.toJSON()); // 2023-12-02T12:29:53.949Z
console.log(myDate.toLocaleString()); // 12/2/2023, 12:29:53 PM

console.log(typeof myDate); //object

let myCreatedDate = new Date(2023,0,23); // Mon Jan 2023 ---> month starts with 0 in JS .
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023,0,23,5,3);
console.log(myCreatedDate1.toLocaleString()) // 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14"); // when we write in yyyy-mm-dd format then month starts with 01 
console.log(myCreatedDate2.toLocaleString()) //1/14/2023, 12:00:00 AM
//In India we mostlt follow mm-dd-yyyy format 

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
console.log(newDate.getDate()); // similarly many more functions aare there.

// we define objects in this method and we can provide many parameters 
newDate.toLocaleString("default",{
    weekday:"long",
})