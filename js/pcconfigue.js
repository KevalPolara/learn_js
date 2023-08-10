// const handletype =( proval , ramval ,memval , graval) =>{
//     if(proval===7000){
//         return 'Student Pc';
//     }else if(proval=== 12000 && ramval>=6000 && memval>=5000){
//         return 'Professional pc';
//     }else if(proval===18000 && ramval>=6000 &&memval>=5000 && graval==4500){
//         return 'Gaming pc';
//     }else {
//         return 'Daily Use pc';
//     }

// }
let arr=[];

 const handleremove=(i)=>{
    arr.splice(i,1);
    console.log(arr);
    handlesubmit();

    return false;
}

let proval=0;
let ramval=0;   
let memval=0;
let graval=0; 

const handlesubmit = () =>{
    let processor=document.getElementsByName("pro");
    let ram=document.getElementsByName("ram");
    let memory=document.getElementsByName("memo");
    let graphics=document.getElementsByName("grap");

    // console.log(processor[0].value, processor[0].checked);

    for(let i=0;i<processor.length;i++){
        if(processor[i].checked){
            proval=(processor[i].value);
        }
    }
    // console.log(proval);

    for(let i=0;i<ram.length;i++){
        if(ram[i].checked){
            ramval=(ram[i].value);
        }
    }
    // console.log(ramval);

    for(let i=0;i<memory.length;i++){
        if(memory[i].checked){
            memval=(memory[i].value);
        }
    }
    // console.log(memval);

    for(let i=0;i<graphics.length;i++){
        if(graphics[i].checked){
            graval=(graphics[i].value);
        }
    }  

    const Configu={
        pro:proval,
        ramone:ramval,
        memone:memval,
        graphicsone:graval,
    };

    
    arr.push(Configu);
    let print='';
    arr.map((v,i)=>{
        print= print +`<tr><td>${v.pro}</td> <td>${v.ramone}</td>
          <td>${v.memone}</td> <td>${v.graphicsone}</td> </tr>`
        print=print + `<button onclick=handleremove(${i})>remove</button>`
    })
    console.log(arr);

    document.getElementById("cost").innerHTML=print;
   
    // console.log(arr);
   return false;

    // console.log(graval);

    // let res=handletype(proval , ramval , memval  , graval);

    // let total=proval + ramval +memval + graval;
    // console.log(total);
    // document.getElementById("cost").innerHTML=arr.push();
    
    // document.getElementById("type").innerHTML=res;

    // console.log(proval);
};
