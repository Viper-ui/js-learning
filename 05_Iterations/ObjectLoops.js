const myObject ={
    js : "javascript",
    cpp: "C++",
    rb:"Ruby",
    swift:"swift by apple"
}

// for (const key in myObject) {
//   console.log(key);
// }

// js
// cpp
// rb
// swift

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for swift by apple

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
//  console.log(key);
 console.log(programming[key]);
}

// 0
// 1
// 2
// 3
// 4

//cannot be used with map (for In)