const handlesubmit=()=>{
 
    let p1=document.getElementsByName("comb");
    let p2=document.getElementsByName("fri");
    let y1=document.getElementById("fries").value;
    let p3=document.getElementsByName("cold");
    let p4=document.getElementsByName("ptc");
    let y2=document.getElementById("colddrink").value;
    let i1=document.getElementById("coupon").value;
    // console.log(i1);
    // console.log(p3[0].value);
    // console.log(y1);
    // console.log(p1[0].value,p1[0].checked);

    let pvalu=0;
    let p2valu=0;
    let p3valu=0;
    let p4valu=0;

    for(let i=0;i<p1.length;i++){
        if(p1[i].checked){
            pvalu=parseInt(p1[i].value);
        }
    }
    // console.log(pvalu);

    for(let i=0;i<p2.length;i++){
        if(p2[i].checked){
            // console.log(p2[i]);
            if(p2[i].value==='0'){
                p2valu=0;
            }else if(p2[i].value==='100'){
                p2valu=y1*parseInt((p2[i].value));
            }
    }
}
    // console.log(p2valu);

    for(let i=0;i<p3.length;i++){
        if(p3[i].checked){
           if(p3[i].value==='0'){
            p3valu=0;
           }else if(p3[i].value==='1'){
            p3valu=parseInt(p3[i].value);
           }
        }
    }
      // console.log(p3valu);

    for(let i=0;i<p4.length;i++){
        if(p4[i].checked){
            if(p4[i].value==='50' || p4[i].value==='80' || p4[i].value==='70'){
                p4valu=p3valu*y2*parseInt(p4[i].value);
            }
        }
    }

    let bill=pvalu + p2valu +p4valu;
    let discount;
    // console.log(bill);
    // console.log(p4valu);

    if(i1==='ABC123' || i1==='XYX856' || i1==='MNP987'){
        discount=bill *0.10;
    }else{
        discount=0;
    }

    let bill1=pvalu + p2valu +p4valu-discount;
    console.log(bill1);


    document.getElementById("ans").innerHTML=pvalu;
    document.getElementById("ans1").innerHTML=p2valu;
    document.getElementById("ans2").innerHTML=p4valu;
    document.getElementById("ans3").innerHTML=bill;
    document.getElementById("ans4").innerHTML=discount;
    document.getElementById("ans5").innerHTML=bill1;



  




    return false;
}