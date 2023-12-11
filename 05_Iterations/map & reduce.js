const myNumbers =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num)=>num+10);

//chaining

// const newNums = myNumbers
// .map((num)=>num*10) //first this will be executed and its results will be used in below chain.
// .map((num)=> num + 1 )
// .filter((num)=> num>=40)
// console.log(newNums);

//reduce 

const total = myNumbers.reduce((acc,currval)=>{
    console.log(`acc:${acc} and curval:${currval}`);
    return acc + currval
},0)// 0 is the initial value acc to us

// const total = myNumbers.reduce((acc,currval)=>acc+currval,0)
// console.log(total);

const shoppingCart =[
    {
        cousreName:'JS',
        price:200
    },
    {
        cousreName:'python',
        price:300
    },
    {
        cousreName:'NODE',
        price:400
    },

]

const totalPrice = shoppingCart.reduce((ACC,COURSE)=>ACC+COURSE.price,0)

console.log(totalPrice);
