// var keyword:-

// var x=20;
// var x=30;

// console.log(x);

// var does not have any block scope

// {
//     var x=10;
// }

// console.log(x);

// we can not redeclare the same name variable.

// let x=10;
// let x=20;

// console.log(x); error

// let have a block scope

// let x=10;

// {
//     let x=20;
//     console.log(x);
// }

// console.log(x);

// let x;
// x=5;
// x=x+10;
// console.log(x);

// we can not redeclare the same variable

// const x=10;
// const x=20;

// console.log(x); error

// declaration and initialization must be done at same time
// const x;
// const x=10;

// console.log(x);error

// we can not change the value of const variable

// const x=10;
// x=x+5;
// console.log(x);error

const x=10;

{
    const y=20;
    console.log(y);
}
console.log(x);












