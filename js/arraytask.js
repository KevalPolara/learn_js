// 1.    Finding the maximum element in an array.

// let arr=[10,20,30,40,50,60];
// let max;

// max=arr[0];

// for(i=1;i<arr.length;i++){
//     if(arr[i]>max)
//     max=arr[i];
// }
// console.log(max);

// 2.    Finding the minimum element in an array.

// let arr=[10,20,30,40,50,60];
// let max;

// max=arr[0];

// for(i=1;i<arr.length;i++){
//     if(arr[i]<max)
//     max=arr[i];
// }
// console.log(max);

// 3.    Sorting an array in ascending order.

// let arr=[10,30,20,40,50,60];

// let arr1=arr.sort((a,b)=>a-b);
// console.log(arr1);

// 4.    Sorting an array in descending order.
// let arr=[10,30,20,40,50,60];

// let arr1=arr.sort((a,b)=>b-a);
// console.log(arr1);

// 5.    Reversing an array.

// let arr=[10,30,20,40,50,60];

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// 6.    Finding the sum of all elements in an array.

// let arr=[10,2,7,11,45];
// let sum=0;
// for(i=0;i<arr.length;i++){
//     sum=sum +arr[i];
// }
// console.log(sum);

// arr.map((v,i)=>sum=sum+v);
// console.log(sum/arr.length);

// 7.    Finding the average of all elements in an array.

// let arr=[10,2,7,11,45];
// let sum=0;

// for(i=0;i<arr.length;i++){
//     sum=sum +arr[i];
// }
// console.log(sum/arr.length);

// 8.    Checking if an array contains a specific element.

// let arr=[10,2,7,11,45];

// let arr1=arr.some((a)=>a==45);
// console.log(arr1);

// 9.  Removing duplicates from an array.

// let arr=[10,20,20,30,40,50,50];

// let arr1=[];

// arr.map((v)=>{
//     if(!arr1.includes()){
//       arr1.push(v);       
//     }
// })
// console.log(arr1);


// 10.    Merging two arrays into a new array.

// let arr=[1,2,3,4,5];
// let arr1=[6,7,8,9,10];

// using concat method:-

// let ans=arr.concat(arr1);

// console.log(ans);

// using push method :-

// arr.push(arr1);
// console.log(arr);

// 11.Splitting an array into two arrays based on a condition.

// let arr=[1,2,3,'ram','shyam','lax'];

// let ans=arr.filter((v,i)=> typeof v ==='string');
// let ans1=arr.filter((v,i)=>typeof v==='number');

// console.log(ans);
// console.log(ans1);

//13. Rotating an array by a given number of positions.

// let arr=[1,2,3,4,5,6,7];

// const arr1 =(arr,n)=>{
//     for(let i=0;i<n;i++){
//         let ans=arr.pop();
//         arr.unshift(ans)
//         // console.log(arr);
//     }
//     console.log(arr);
// }

// arr1(arr,2);


// let n=2;

// for(let i=0;i<n;i++){
// arr.push(arr.shift());
//     arr.unshift(arr.pop()); 
// }

// console.log(arr);

// 14. Finding the second largest element in an array.

// let arr= [45,43,7,23,67,34];

// let ans=arr.sort((a,b)=>(a-b));
// // console.log(arr);
// console.log(ans[arr.length-2]);


// let m1=0,m2=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>m1){
//         m2=m1;
//         m1=arr[i];
//     }else if(arr[i]<m1 && arr[i]>m2){
//         m2=arr[i];
//     }
// }
// console.log(m2);
// console.log(m1);


// 15.  Finding the k-th smallest element in an array.
// let arr=[1,3,2,5,6,4];

// let k=2;

// arr.sort((a,b)=>a-b);
// console.log(arr[k-1]);

// 17.    Finding the median of an array.

// let arr=[10,20,30,40];

// let l=arr.length;

// let index= Math.floor(l/2);

// if(l%2===0){
//     let ans1=((arr[index]) +(arr[index-1]))/2
//     console.log(ans1);

// }else{
//   let ans= (arr[index]);
//   console.log(ans);
// }

// 19.    Checking if two arrays are equal or not.

// let arr1=[10,20,30,40,50];
// let arr2=[10,20,30,40,50,30];

// if(arr1.length!==arr2.length){
//     console.log("lenght are not same");
// }else{
//     // console.log("lenght are same");
//     flag=0;

//     arr1.map((v,i)=>{
//         if(arr1[i]!==arr2[i]){
//             flag=1;
//         }
//     })

//     if(flag==0){
//         console.log("Elemet Are Same:");
//     }else{
//         console.log("Element are not same:-");
//     }
// }


// 23.    Finding the index of the first occurrence of an element in an array.

// let arr=[1,2,2,2,3,4,5,6];
// let arr=[100,25,30,25,50,25];
// let arr=[100,65,25,96,12,25,45];


// let res;

// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             res=arr.indexOf(arr[i]);
//         }
//     }
// }
// console.log(res);

// let firstOccurence=(arr,n)=>{

//    res= arr.indexOf(n);
//     console.log(res);
// }

// firstOccurence(arr,2);

// 24.    Finding the index of the last  occurrence of an element in an array.

// let arr=[100,25,30,25,50,25];
// let res;

// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             res=arr.lastIndexOf(arr[i]);
//         }
//     }
// }

// console.log(res);
// const lastoccurence=(arr,n)=>{
//     res=arr.lastIndexOf(n);

//     console.log(res);
// }

// lastoccurence(arr,25);

// 25.   Removing all occurrences of an element from an array.

// let arr=[41,42,43,42,45,42,43];
// let ans;

// let ans=arr.filter((v,i)=>v!==42 && v!==43)
// console.log(ans);

// const removingallocuurence=(arr,n)=>{
//  ans= arr.filter((v)=>v!==n);
//  console.log(ans);
// }

// removingallocuurence(arr,42);

// 26.    Replacing all occurrences of an element in an array with a new element.

// let arr1=[10,20,30,20,30,40];
// let ans;

// const replacingallelement=(arr1,oldelm,newelm)=>{
//    ans= arr1.map((v)=> (v===oldelm) ? newelm : v);
//     console.log(ans);

// }

// replacingallelement(arr1,20,70);

// 27.    Creating a new array with the elements of the original array in reverse order, without modifying the original array.

// let arr=[22,43,23,56,18];

// let temp=[...arr];
// let res=temp.reverse();
// console.log(res);
// console.log(arr);


// let res=arr.slice().reverse();
// console.log(arr);
// console.log(res);

// 28.    Checking if an array is sorted in ascending order.

// let arr=[1,2,3,4,5];

// const checkarray=(arr)=>{
//     let flag=true;

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] >arr[j]){
//         flag=false;
//         break;
//         }
//     }
// }

// if(flag){
//     console.log('Assending order');
// }else{
//     console.log('Not Assending Order');
// }

// }

// checkarray(arr);

// const assending=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]> arr[i+1]){
//             return false;
//         }
//     }
//     return true;
// }


// console.log(assending(arr));

// 29.    Checking if an array is sorted in descending order.

// let arr=[45,44,43,42,41,40];

// const descending=()=>{

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         return true;
//     }
// }
// return false;
// }

// console.log(descending(arr));

// 30.    Finding the first three maximum number's sum an array.

// let arr=[21,14,23,43,34];

// arr.sort((a,b)=>b-a);
// let ans=arr.slice(0,3).reduce((acc,v)=> acc+v,0);
// console.log(ans);
























