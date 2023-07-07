const handletype =( proval , ramval ,memval , graval) =>{
    if(proval===7000){
        return 'Student Pc';
    }else if(proval=== 12000 && ramval>=6000 && memval>=5000){
        return 'Professional pc';
    }else if(proval===18000 && ramval>=6000 &&memval>=5000 && graval==4500){
        return 'Gaming pc';
    }else {
        return 'Daily Use pc';
    }

}

const handlesubmit = () =>{
    let processor=document.getElementsByName("pro");
    let ram=document.getElementsByName("ram");
    let memory=document.getElementsByName("memo");
    let graphics=document.getElementsByName("grap");


    let proval=0;
    let ramval=0;
    let memval=0;
    let graval=0; 

    // console.log(processor[0].value, processor[0].checked);

    for(let i=0;i<processor.length;i++){
        if(processor[i].checked){
            proval=parseInt(processor[i].value);
        }
    }
    // console.log(proval);

    for(let i=0;i<ram.length;i++){
        if(ram[i].checked){
            ramval=parseInt(ram[i].value);
        }
    }
    // console.log(ramval);

    for(let i=0;i<memory.length;i++){
        if(memory[i].checked){
            memval=parseInt(memory[i].value);
        }
    }
    // console.log(memval);

    for(let i=0;i<graphics.length;i++){
        if(graphics[i].checked){
            graval=parseInt(graphics[i].value);
        }
    }
    // console.log(graval);

    let res=handletype(proval , ramval , memval  , graval);

    let total=proval + ramval +memval + graval;
    // console.log(total);
    document.getElementById("cost").innerHTML=total;
    document.getElementById("type").innerHTML=res;



    // console.log(proval);

   


    return false;

}