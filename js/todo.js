let arr=[];
let updateindex=null;
const handleadd=()=>{
    let todo=document.getElementById("todo").value;

    if(updateindex!==null){
        arr[updateindex]=todo;
    }else{
        arr.push(todo);
    }

    
    updateindex=null;

    showdisplay();
    // console.log(arr);

    return false;

    // console.log(todo);
}

const handleremove=(i)=>{

    arr.splice(i,1);
    showdisplay();

    return false;
}

const handleedit=(i)=>{

    document.getElementById("todo").value=arr[i];

    updateindex=i;

    return false;
}

const showdisplay=()=>{

    let print='';

    arr.map((v,i)=>{
        print=print+`<li>${v}`
        print=print+ `<button onclick=handleremove(${i})>remove</button>`
        print=print+`<button onclick=handleedit(${i})>Edit</button></li>`
    });

    document.getElementById("demo").innerHTML=print;
}
