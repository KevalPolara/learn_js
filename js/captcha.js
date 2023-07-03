let x=Math.floor(Math.random()*10);
let z=Math.floor(Math.random()*10);

let ans=x+z;
// console.log(ans);

document.getElementById("n1").innerHTML=x;
document.getElementById("n2").innerHTML=z;



function handlealert(){

  let k=document.getElementById("valuefour").value; 

   if(k==ans){
     alert("Your Answer is Right");
   }else{
     alert("Your Answer is Wrong");
   }
}










    