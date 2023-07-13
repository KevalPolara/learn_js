const handletax = (intax,intax1,intax2,intax3,intax4,intax5,intax6)=>{
    document.getElementById("slab1").innerHTML=intax;
    document.getElementById("slab2").innerHTML=intax1;
    document.getElementById("slab3").innerHTML=intax2;
    document.getElementById("slab4").innerHTML=intax3;
    document.getElementById("slab5").innerHTML=intax4;
    document.getElementById("slab6").innerHTML=intax5;
    document.getElementById("total-tax").innerHTML=intax6;
}

const handleincome=()=>{

    let income=parseInt(document.getElementById("income").value);
    let intax=0;
    let intax1=0;
    let intax2=0;
    let intax3=0;
    let intax4=0;
    let intax5=0;

    // console.log(income);
    if(income<=300000){
         intax=income * 0;
        // console.log(intax);
    }else if(income >300000 &&income <=600000){
        intax1=(income-300000)*0.05;
        // console.log(intax1);
    }else if(income >600000 && income <=900000){
        intax1=(600000-300000)*0.05;
        intax2= (income-600000)*0.10;
    }else if(income >900000  &&income <=1200000){
        intax1=(600000-300000)*0.05;
        intax2= (900000-600000)*0.10;
        intax3=(income-900000)*0.15;
    }else if(income >1200000 && income <=1500000){
        intax1=(600000-300000)*0.05;
        intax2= (900000-600000)*0.10;
        intax3=(1200000-900000)*0.15;
        intax4=(income-1200000)*0.20;
    }else if(income >1500000){
        intax1=(600000-300000)*0.05;
        intax2= (900000-600000)*0.10;
        intax3=(1200000-900000)*0.15;
        intax4=(1500000-1200000)*0.20;
        intax5=(income-1500000)*0.30;
    }

    let intax6;
    intax6=intax + intax1 +intax2 +intax3 + intax4 +intax5;

    handletax(intax,intax1,intax2,intax3,intax4,intax5,intax6);
    return false;
}