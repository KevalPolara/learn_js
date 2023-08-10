// Array And Object Ni Andar Je Value Che Aene Local
// variable ma store karva mate destructuring no use thay

// As per Es5:-

// let details={
//     name:"Keval Polara",
//     contact : "9265933088",
//     email : "kevalpolara5272@gmail.com",
// };

// let n=details.name;
// let c=details.contact;
// let e=details.email;

// console.log(n,c,e);

// As per Es6:-

// let details = {
//   name: "Keval Polara",
//   contact: "9265933088",
//   email: "kevalpolara5272@gmail.com"
// };

// let {name:n,contact:c,email:e}=details;

// console.log(n,c,e);


// Array As per Es5:-

// let arr=[1,2,3,4,5];

// let a=arr[0];
// console.log(a);

// Array As per Es6:-

// let [v1,v2,v3,v4]=arr;
// console.log(v1,v2,v3,v4);
/****************************** */


//  Spreading operator:-

// Array ek reference type hoy ek ma change karvi aetle bija
// ma automatic change thay jay.

// let arr=[10,20,30];
// let arr1=[...arr,40,50]; //10,20,30
// arr[0]=20;
// console.log(arr[0]);
// console.log(arr1[0]);
// console.log(arr);
// console.log(arr1);

// Merging With Spreading Operator:-

// let a=[10,20,30];
// let b=[40,50,60];
// let c=[...a,...b];
// console.log(a,b,c);


// Object With Spreding Operator:-

// let obj={Course:"javascript", id:"101"};
// let obj1={...obj,duration:"SixMOnth"};
// obj.Course="React";

// console.log(obj);
// console.log(obj1);

// Merging of Object With Spreading Operator:-

// let obj={Course:"javascript", id:"101"};
// let obj1={duration:"SixMOnth"};
// let c={...obj,...obj1};

// console.log(c);


/**********************************/ 

// Spreading With Array:-

// let arr=[10,20,30];
// let arr1=[];
// arr1=[...arr];
// console.log(arr);
// console.log(arr1);

/************************/ 
// mergin With Array:-

// let arr=[10,20,30];
// let arr1=[40,50,60];
// let arr2=[...arr,...arr1];
// console.log(arr2,);\
// let arr3=[...arr1,...arr2,20,30];
// console.log(arr3);

/****************************/

// Destructuring With Array:-

// let arr=[10,20,30];
// console.log(arr[0]);

// As Per Es6:-

// let [v1,v2,v3]=arr;

/*******************************/

// Object with Spreading:-

// let obj={id:101,name:'keval'};
// let obj1={...obj};
// console.log(obj1);

// Object With Merging:

// let obj={id:101,name:'Keval'};
// let obj1={age:25,name:'Xyz'};

// let obj2={...obj,...obj1};
// console.log(obj2);

// Object With Destructuring:-

// let obj={id:101,name:'Keval'};

// let {id:i,name:n}=obj;
// console.log(i);
// console.log(n);





