const coding=["js","py","c++","node","java"]

// coding.forEach(function (val)  {
//     console.log(val);
// } );

// coding.forEach((item)=>{
//     console.log(item);
// })

function printMe(item) {
    console.log(item);
}

//coding.forEach(printMe) //give the reference of function not execution 


coding.forEach((item, index,arr)=>{
//console.log(item,index,arr);
})


//      -----------------very Imp--------------------------------
const myCoding =[
    {
        langname:"js",
        langFile:"js1"
    },
    {
        langname:"py",
        langFile:"py1"
    },
    {
        langname:"Rb",
        langFile:"Rb1"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langFile);
})