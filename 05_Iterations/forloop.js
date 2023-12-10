//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
       // console.log("5 is best number");
    }
    //console.log(element);

}

// console.log(element) //ReferenceError: element is not defined as we are outside the block scope

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop ${i}`);
    //console.log(`Table for ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j );
    }
  
}

// let myArr =["f","l","A"]

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     //console.log(element);
    
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index ==5 ){
//         console.log("fav no"); //getting out from here 
//         break;
//     }
//     console.log(`Value of index is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if(index ==5 ){
        console.log("fav no"); //5 will not be printed 
        continue
    }
    console.log(`Value of index is ${index}`);
    
}



