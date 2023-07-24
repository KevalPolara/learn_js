// outer Function:-
// const personalinfo =(name)=>{
//     let age=30;

//     // Inner Function:-
//     return function proinfo(){
//         let salary= 45000;

//         console.log(name);
//         console.log(salary);
//         console.log(age);
//     }
// }

// let res=personalinfo('amit');
// console.log(res);
// res();

// Sha mate closure ni jarur padi:-
// let count=0;
// const increment =()=>{
//     count++;
//     console.log(count);
// }

// const decrement=()=>{
//     count--;
//     console.log(count);
// }

// count=count+5; koy pan Acces kari ne vayo jay;
// this is a global problem;

// increment();
// increment();
// increment();

// console.log("-------------------------------------");

// decrement();
// decrement();

// const increment =()=>{
//     // local variable
//     let count=0;
//     count++;
//     console.log(count);
// }

// const decrement=()=>{
//     // local variable
//     let count=0;
//     count--;
//     console.log(count);
// }

// increment();
// increment();
// increment();

// console.log("-------------------------------------");

// decrement();
// decrement();

// solution:-

// const counterouter=()=>{
//     let count=0;

//     return function counterinnerincr(){
//         count++;
//         console.log(count);
//     }
// }

// let res=counterouter();
// res();
// res();
// res();

// let res1=counterouter();
// res1();
// res1();

// 2 function ne ek sathe return na karavi sakye:-

const counterouter =()=>{
    let count=0;

    let inc=function counterinnerincr(){
        count++;
        console.log(count);
    }

    let dec=function counterinnerdec(){
        count--;
        console.log(count);
    }

    return {increment : inc,decrement:dec}
}

let res= counterouter();
res.increment();
res.increment();
res.increment();

res.decrement();
res.decrement();





