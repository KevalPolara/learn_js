let arr=[30,40,50,60,70];

let arr1=[100,400];

// How to Acces Array:-

// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach((index,value)=>{
//     console.log(value,index);
// });

// arr.map((index,value)=>{
//     console.log(value,index)
// })

// function in array method:-

// update of Array:-

// arr[2]=90;
// console.log(arr);

// Add in array:-

// arr.push(10);
// console.log(arr); add in last:-

// arr.unshift(20);
// console.log(arr); add in first:-

// arr.splice(2,0,98.7,100,90); three element add in 2 index;
// console.log(arr);

// remove in array:

// arr.pop();
// console.log(arr); remove in last

// arr.shift();
// console.log(arr); remove in first;

// 

// Array are object:
// console.log(typeof(arr));

// some method which is a very useful:-
// Array.isArray(arr);
// console.log(arr);

// let ans=arr.concat(arr1);
// console.log(ans);

let ans=[...arr, ...arr1];
console.log(ans);
// console.log(ans);

// let ans=arr.some((a)=>(a>10));
// console.log(ans);

// console.log(arr.toString());

// let ans=arr.find((a)=> (a>10))
// console.log(ans);

// *******************************//******************************* */

// Filter Method:-

// let ans=arr.filter((a)=>(a>40));
// console.log(ans); 
// this is a similar as a some method:-

// reduce method:-

// let ans=arr.reduce((t,n)=>{
//     return t-n;
// });
// console.log(ans);

// const arr = [175, 50, 25,40,50];

// let ans= arr.reduce(myFunc);

// function myFunc(total, num) {
//   return total + num;
// }

// console.log(ans);

// join method:-

// let arr1=arr.join(" and ");
// console.log(arr1);

// slice method:-

// let ans=arr.slice(1,4);
// console.log(ans);

// fill method:-

// let ans=arr.fill("keval",1,4 );
// console.log(ans);

// filter method:-

// let fdata=arr.filter((v,i)=>v>18 && v<50);
// console.log(fdata);

// reduce method:-

// let res=arr.reduce((acc,v,i)=> acc+v,0);
// console.log(res);

// join method:-

// let res=arr.join("|");
// console.log(res);

// slice method:-

// let res=arr.slice(1,3);
// console.log(res);

// fill method:-







